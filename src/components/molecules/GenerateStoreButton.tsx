"use client";

import { SparklesIcon } from '@heroicons/react/24/outline';

export const GenerateStoreButton = () => {
    return (
        <button
            className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            onClick={() => { }}
        >
            <SparklesIcon className="w-5 h-5" />
            Generate Store
        </button>
    );
}; 