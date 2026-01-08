import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { sharedStyles } from '@/styles/shared';
import { colors } from '@/styles/theme';
import { ROUTES } from '@/constants/routes';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const result = await login({ email: email.trim(), password });

    if (result.success) {
      router.replace(ROUTES.HOME);
    } else {
      Alert.alert('Login Failed', result.error || 'Please try again');
    }
  };

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Welcome Back</Text>

      <TextInput
        style={sharedStyles.input}
        placeholder="Email"
        placeholderTextColor={colors.gray400}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        editable={!isLoading}
      />

      <TextInput
        style={sharedStyles.input}
        placeholder="Password"
        placeholderTextColor={colors.gray400}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!isLoading}
      />

      <TouchableOpacity
        style={[
          sharedStyles.button,
          isLoading && sharedStyles.buttonDisabled
        ]}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={sharedStyles.buttonText}>Sign In</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
