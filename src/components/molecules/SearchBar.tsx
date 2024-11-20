"use client";

import { useState } from 'react';
import { SearchInput } from '../atoms/SearchInput';
import { IconButton } from '../atoms/IconButton';
import { PlusCircleIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="relative flex items-center w-full max-w-[calc(100vw-2rem)] md:max-w-3xl mx-auto">
            <div className="relative flex-1 flex items-center">
                <IconButton
                    icon={<PlusCircleIcon className="w-6 h-6 text-gray-900 stroke-2" />}
                    className="absolute left-3 z-10"
                />
                <SearchInput
                    value={searchText}
                    onChange={setSearchText}
                    className="pl-12 text-sm md:text-base"
                />
                <IconButton
                    icon={<ArrowUpIcon className="w-5 h-5" />}
                    disabled={!searchText}
                    className="absolute right-3"
                />
            </div>
        </div>
    );
}; 