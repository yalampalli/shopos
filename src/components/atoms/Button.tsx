interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
    const baseStyles = "rounded-full transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
    const variantStyles = {
        primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
        secondary: "border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}; 