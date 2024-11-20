"use client";

import { ArrowLeftIcon, PhotoIcon, VideoCameraIcon, CubeIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { MainLayout } from '@/components/templates/MainLayout';
import { FilterChip } from '@/components/atoms/FilterChip';
import { AgentCard } from '@/components/molecules/AgentCard';
import { useState } from 'react';

const filters = ["All", "Text", "Image", "Video", "3D", "Voice", "Misc"];

const agents = [
    {
        title: "Background Remover",
        description: "Remove backgrounds in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "Background Changer",
        description: "Changes background of the image in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "Video Generator",
        description: "Transform images into captivating videos in seconds.",
        icon: <VideoCameraIcon className="w-full h-full" />,
        type: "Video"
    },
    {
        title: "Description Generator",
        description: "Remove backgrounds in seconds.",
        icon: <Square3Stack3DIcon className="w-full h-full" />,
        type: "Text"
    },
    {
        title: "Smart Crop",
        description: "Automatically crop videos for different aspect ratios.",
        icon: <VideoCameraIcon className="w-full h-full" />,
        type: "Video"
    },
    {
        title: "Avatars",
        description: "Choose or create your own avatars to promote products.",
        icon: <CubeIcon className="w-full h-full" />,
        type: "3D"
    },
    {
        title: "Video Editor",
        description: "Transform images into captivating videos in seconds.",
        icon: <VideoCameraIcon className="w-full h-full" />,
        type: "Video"
    },
    {
        title: "AI Shadows",
        description: "Remove backgrounds in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "Batch Edit",
        description: "Transform images into captivating videos in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "AI Model",
        description: "Remove backgrounds in seconds.",
        icon: <CubeIcon className="w-full h-full" />,
        type: "3D"
    },
    {
        title: "Image Editor",
        description: "Transform images into captivating videos in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "Face Change",
        description: "Remove backgrounds in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    },
    {
        title: "Smart Crop",
        description: "Automatically crop videos for different aspect ratios.",
        icon: <VideoCameraIcon className="w-full h-full" />,
        type: "Video"
    },
    {
        title: "Avatars",
        description: "Choose or create your own avatars to promote products.",
        icon: <CubeIcon className="w-full h-full" />,
        type: "3D"
    },
    {
        title: "Video Editor",
        description: "Transform images into captivating videos in seconds.",
        icon: <VideoCameraIcon className="w-full h-full" />,
        type: "Video"
    },
    {
        title: "AI Shadows",
        description: "Remove backgrounds in seconds.",
        icon: <PhotoIcon className="w-full h-full" />,
        type: "Image"
    }
];

export default function AgentsPage() {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filteredAgents = agents.filter(agent =>
        selectedFilter === "All" || agent.type === selectedFilter
    );

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg">
                        <ArrowLeftIcon className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-semibold">Agents</h1>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                    {filters.map((filter) => (
                        <FilterChip
                            key={filter}
                            label={filter}
                            isSelected={selectedFilter === filter}
                            onClick={() => setSelectedFilter(filter)}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredAgents.map((agent, index) => (
                        <AgentCard
                            key={index}
                            icon={agent.icon}
                            title={agent.title}
                            description={agent.description}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
} 