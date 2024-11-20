import type { Metadata } from "next";
import { StoreProvider } from "@/context/StoreContext";
import "./globals.css";

export const metadata: Metadata = {
    title: "shop os",
    description: "An AI soution to modern storefronts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
