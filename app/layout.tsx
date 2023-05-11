import './globals.css';
import { Changa } from 'next/font/google';

const changa = Changa({ subsets: ['latin'] });

export const metadata = {
    title: 'Psybombay',
    description: 'Developed by Psybombay',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={changa.className}>{children}</body>
        </html>
    );
}
