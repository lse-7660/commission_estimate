'use client';

import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full max-w-xl px-4 h-15 sticky top-0 z-10 flex items-center bg-white text-zinc-700">
            <div className="w-full flex flex-row items-center gap-2">
                <Image width={36} height={36} src="/logo_nenenisang.png" alt="네네니상 커미션 견적" />
                <h1 className="h-fit text-xl font-bold">커미션 견적</h1>
            </div>
        </header>
    );
}
