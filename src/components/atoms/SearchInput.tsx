"use client";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const SearchInput = ({
    value,
    onChange,
    placeholder = "What are we selling today?",
    className = ""
}: SearchInputProps) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 text-base rounded-full 
                border border-gray-200
                focus:outline-none focus:border-blue-500 
                bg-white text-gray-900
                placeholder-gray-500
                ${className}`}
        />
    );
}; 