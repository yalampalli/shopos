import { useState, useCallback, useMemo } from 'react';

interface UseFilterProps<T> {
    items: T[];
    filterKey: keyof T;
}

export function useFilter<T>({ items, filterKey }: UseFilterProps<T>) {
    const [selectedFilter, setSelectedFilter] = useState<string>("All");

    const handleFilterChange = useCallback((filter: string) => {
        setSelectedFilter(filter);
    }, []);

    const filteredItems = useMemo(() => {
        return selectedFilter === "All"
            ? items
            : items.filter(item => item[filterKey] === selectedFilter);
    }, [items, selectedFilter, filterKey]);

    return {
        selectedFilter,
        handleFilterChange,
        filteredItems
    };
} 