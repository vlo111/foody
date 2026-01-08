import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {useRouter} from 'expo-router';
import {useAuth} from '@/hooks/useAuth';
import {colors, spacing, fontSize, borderRadius} from '@/styles/theme';
import {Ionicons} from '@expo/vector-icons';

export default function ProfileScreen() {
    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: async () => {
                        await logout();
                        router.replace('/(auth)/login');
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
                activeOpacity={0.7}
            >
                <Ionicons name="log-out-outline" size={24} color={colors.error}/>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

            {/* App Version */}
            <Text style={styles.version}>Version 1.0.0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundSecondary,
    },
    header: {
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingTop: spacing.xl,
        paddingBottom: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    name: {
        fontSize: fontSize['2xl'],
        fontWeight: '700',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    email: {
        fontSize: fontSize.base,
        color: colors.textSecondary,
        marginBottom: spacing.sm,
    },
    roleBadge: {
        backgroundColor: colors.primary + '20',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.full,
    },
    roleText: {
        fontSize: fontSize.xs,
        fontWeight: '600',
        color: colors.primary,
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        marginTop: spacing.md,
        paddingVertical: spacing.lg,
        marginHorizontal: spacing.md,
        borderRadius: borderRadius.lg,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: fontSize['2xl'],
        fontWeight: '700',
        color: colors.text,
        marginBottom: spacing.xs,
    },
    statLabel: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
    },
    statDivider: {
        width: 1,
        backgroundColor: colors.border,
    },
    menuContainer: {
        marginTop: spacing.md,
        backgroundColor: colors.white,
        marginHorizontal: spacing.md,
        borderRadius: borderRadius.lg,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary + '10',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    menuContent: {
        flex: 1,
    },
    menuTitle: {
        fontSize: fontSize.base,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 2,
    },
    menuSubtitle: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        backgroundColor: colors.white,
        marginHorizontal: spacing.md,
        marginTop: spacing.lg,
        marginBottom: spacing.md,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.lg,
        borderWidth: 1,
        borderColor: colors.error,
    },
    logoutText: {
        fontSize: fontSize.base,
        fontWeight: '600',
        color: colors.error,
    },
    version: {
        fontSize: fontSize.sm,
        color: colors.textSecondary,
        textAlign: 'center',
        marginBottom: spacing.xl,
    },
});
