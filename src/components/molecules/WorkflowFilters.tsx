"use client";

import { FilterChip } from '../atoms/FilterChip';

const filters = ["All", "Image", "Video", "Text", "3D"];

interface WorkflowFiltersProps {
    onFilterChange: (filter: string) => void;
    selectedFilter: string;
}

export const WorkflowFilters = ({ onFilterChange, selectedFilter }: WorkflowFiltersProps) => {
    return (
        <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
                <FilterChip
                    key={filter}
                    label={filter}
                    isSelected={selectedFilter === filter}
                    onClick={() => onFilterChange(filter)}
                />
            ))}
        </div>
    );
}; 