import { useEffect, useState } from 'react';
import { useAuthStore } from '@store/authStore';

/**
 * isStorageReady - true when storage has finished loading
 */
export function useAuthPersistence() {
    const [isStorageReady, setIsStorageReady] = useState(false);

    useEffect(() => {
        const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
            setIsStorageReady(true);
        });

        if (useAuthStore.persist.hasHydrated()) {
            setIsStorageReady(true);
        }

        return unsubscribe;
    }, []);

    return isStorageReady;
}