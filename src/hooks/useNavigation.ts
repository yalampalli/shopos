import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export function useNavigation() {
    const router = useRouter();

    const navigateTo = useCallback((path: string) => {
        router.push(path);
    }, [router]);

    return { navigateTo };
} 