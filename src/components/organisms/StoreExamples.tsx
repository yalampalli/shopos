"use client";

import Image from 'next/image';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

interface ExampleCard {
    image: string;
    title: string;
}

const examples: ExampleCard[] = [
    {
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=60',
        title: "Men's dress shirt"
    },
    {
        image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&auto=format&fit=crop&q=60',
        title: 'Natural Eyeshadow Palette'
    },
    {
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60',
        title: 'Noise - Cancelling Headphones'
    }
];

export const StoreExamples = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
                <div key={index} className="group relative bg-white rounded-xl">
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                        <Image
                            src={example.image}
                            alt={example.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                            <div className="flex justify-between">
                                <button className="px-3 py-1 bg-black/50 text-white rounded-lg text-sm">
                                    Demo
                                </button>
                                <button className="p-2 bg-black/50 rounded-lg">
                                    <PencilSquareIcon className="w-4 h-4 text-white" />
                                </button>
                            </div>
                            <button className="mx-auto px-4 py-2 bg-white text-black rounded-lg">
                                Create a Store
                            </button>
                        </div>
                    </div>
                    <h3 className="text-sm font-medium truncate text-center text-gray-900">
                        {example.title}
                    </h3>
                </div>
            ))}
        </div>
    );
}; 