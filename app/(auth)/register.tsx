import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@hooks/auth/useAuth';
import { sharedStyles } from '@/styles/shared';
import { colors } from '@/styles/theme';
import { ROUTES } from '@/constants/routes';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading } = useAuth();
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const result = await register({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password,
      role: 'customer',
    });

    if (result.success) {
      Alert.alert('Success', 'Account created!', [
        { text: 'OK', onPress: () => router.replace(ROUTES.HOME) },
      ]);
    } else {
      Alert.alert('Registration Failed', result.error || 'Please try again');
    }
  };

  return (
    <ScrollView contentContainerStyle={sharedStyles.scrollContainer}>
      <Text style={sharedStyles.title}>Create Account</Text>
      
      <TextInput
        style={sharedStyles.input}
        placeholder="Full Name"
        placeholderTextColor={colors.gray400}
        value={name}
        onChangeText={setName}
        editable={!isLoading}
      />

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
        placeholder="Phone Number"
        placeholderTextColor={colors.gray400}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
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
        onPress={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={sharedStyles.buttonText}>Create Account</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
