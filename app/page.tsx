import Image from 'next/image';
import { Header, Content, Footer } from './components';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-5 space-y-8">
            <Header />
            <Content />
            <Footer />
        </main>
    );
}
