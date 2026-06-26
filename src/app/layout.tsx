import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/Provider';
import Header from '@/components/layout/Header';

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
    title: '네네니상 커미션',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${notoSansKr.variable} h-full antialiased`}>
            <body className="min-h-full">
                <div className=" relative flex flex-col items-center justify-center font-sans dark:bg-black">
                    <Header />
                    <StoreProvider>
                        <main className="w-full bg-white max-w-xl">{children}</main>
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}
