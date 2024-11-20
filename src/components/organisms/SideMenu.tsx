import { MenuItem } from '../atoms/MenuItem';
import { HomeIcon, BuildingStorefrontIcon, CogIcon } from '@heroicons/react/24/outline';

interface SideMenuProps {
    orientation: 'vertical' | 'horizontal';
}

export const SideMenu = ({ orientation }: SideMenuProps) => {
    const isVertical = orientation === 'vertical';

    return (
        <nav className={`
            bg-white border-gray-200
            ${isVertical
                ? 'w-16 h-screen border-r flex flex-col items-center justify-center gap-8'
                : 'w-full h-16 border-t flex items-center justify-around px-4'}
        `}>
            <MenuItem
                href="/"
                icon={<HomeIcon />}
                label="Home"
                orientation={orientation}
            />
            <MenuItem
                href="/stores"
                icon={<BuildingStorefrontIcon />}
                label="Stores"
                orientation={orientation}
            />
            <MenuItem
                href="/workflows"
                icon={<CogIcon />}
                label="Workflows"
                orientation={orientation}
            />
        </nav>
    );
}; 