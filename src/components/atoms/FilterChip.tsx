"use client";

interface FilterChipProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

export const FilterChip = ({ label, isSelected, onClick }: FilterChipProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isSelected
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
        >
            {label}
        </button>
    );
}; 