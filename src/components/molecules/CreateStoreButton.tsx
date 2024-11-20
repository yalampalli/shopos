"use client";

import { useRouter } from 'next/navigation';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export const CreateStoreButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/stores/create')}
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
            <PlusCircleIcon className="w-5 h-5" />
            Create a Store
        </button>
    );
}; 