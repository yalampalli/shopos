"use client";

import { useCallback } from 'react';
import { useNavigation } from '@/hooks/useNavigation';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
}

export const ServiceCard = ({ icon, title, description, href }: ServiceCardProps) => {
    const { navigateTo } = useNavigation();

    const handleClick = useCallback(() => {
        if (href) {
            navigateTo(href);
        }
    }, [href, navigateTo]);

    return (
        <div
            className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleClick}
        >
            <div className="space-y-4">
                <div className="w-10 h-10 text-gray-700">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="text-sm text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}; 