import type {Metadata} from 'next';
import {ReactNode} from "react";
import {Inter} from 'next/font/google';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Auto Test',
    description: 'Auto test application',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
