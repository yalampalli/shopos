"use client";

import { useMemo } from 'react';
import WorkflowTile from '../molecules/WorkflowTile';
import { WorkflowFilters } from '../molecules/WorkflowFilters';
import { useFilter } from '@/hooks/useFilter';
import { workflows } from '@/data/workflows';

export const WorkflowGrid = () => {
    const { selectedFilter, handleFilterChange, filteredItems } = useFilter({
        items: workflows,
        filterKey: 'tag'
    });

    const gridContent = useMemo(() => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((workflow, index) => (
                <WorkflowTile
                    key={index}
                    {...workflow}
                />
            ))}
        </div>
    ), [filteredItems]);

    return (
        <div className="space-y-8">
            <WorkflowFilters
                selectedFilter={selectedFilter}
                onFilterChange={handleFilterChange}
            />
            {gridContent}
        </div>
    );
}; 