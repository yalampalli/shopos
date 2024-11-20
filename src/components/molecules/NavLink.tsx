import Image from 'next/image';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    icon?: string;
    children: React.ReactNode;
}

export const NavLink = ({ href, icon, children }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        >
            {icon && (
                <Image
                    src={icon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                />
            )}
            {children}
        </Link>
    );
}; 