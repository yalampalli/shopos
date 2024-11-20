import { SideMenu } from '../organisms/SideMenu';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <div className="hidden md:block">
                <SideMenu orientation="vertical" />
            </div>
            <main className="flex-1 p-4 md:p-8 mb-16 md:mb-0">
                {children}
            </main>
            <div className="fixed bottom-0 left-0 right-0 md:hidden">
                <SideMenu orientation="horizontal" />
            </div>
        </div>
    );
}; 