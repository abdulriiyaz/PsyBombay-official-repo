import './globals.css';
import { Coda } from 'next/font/google';

const coda = Coda({ weight: '400', subsets: ['latin'] });

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
            <body className={coda.className}>{children}</body>
        </html>
    );
}
