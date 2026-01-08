import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@hooks/auth/useAuth';
import { sharedStyles } from '@/styles/shared';
import { ROUTES } from '@/constants/routes';

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();
          router.replace(ROUTES.AUTH.LOGIN);
        },
      },
    ]);
  };

  return (
    <View style={sharedStyles.centerContainer}>
      <Text style={sharedStyles.title}>Welcome, {user?.name}!</Text>
      <Text style={sharedStyles.subtitle}>You're logged in</Text>

      <TouchableOpacity
        style={sharedStyles.buttonDanger}
        onPress={handleLogout}
      >
        <Text style={sharedStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
