"use client";

interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const IconButton = ({ icon, onClick, disabled = false, className = "" }: IconButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {icon}
        </button>
    );
}; 