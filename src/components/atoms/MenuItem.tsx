"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    orientation: 'vertical' | 'horizontal';
}

export const MenuItem = ({ href, icon, label, orientation }: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const isVertical = orientation === 'vertical';

    return (
        <Link
            href={href}
            className={`
                flex items-center justify-center transition-colors
                ${isVertical
                    ? 'w-12 h-12 rounded-lg'
                    : 'flex-col gap-1 py-2'}
                ${isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'}
            `}
            title={isVertical ? label : undefined}
            aria-label={label}
        >
            <div className="w-6 h-6">
                {icon}
            </div>
            {!isVertical && (
                <span className="text-xs">{label}</span>
            )}
        </Link>
    );
}; 