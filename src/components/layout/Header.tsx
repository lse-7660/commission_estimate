'use client';

export default function Header() {
    return (
        <header className="w-full max-w-xl px-4 h-13 sticky top-0 z-10 flex items-center bg-white text-black">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="h-fit text-sm">견적 미리보기</h1>
            </div>
        </header>
    );
}
