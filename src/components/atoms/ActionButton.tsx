"use client";

import { useRouter } from 'next/navigation';

interface ActionButtonProps {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    href?: string;
}

export const ActionButton = ({ label, onClick, icon, href }: ActionButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 
                     hover:bg-gray-50 transition-colors 
                     bg-white text-gray-900"
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}; 