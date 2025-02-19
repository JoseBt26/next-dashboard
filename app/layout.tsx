import React from "react";
import { PropsWithChildren } from "react";
import "../app/ui/globals.css";
import { robotoFont } from "./ui/fonts";

export const metadata = {
    title: 'Next.js Dashboard',
    description: 'Created by Vercel',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${robotoFont.className} antialiased `}>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;