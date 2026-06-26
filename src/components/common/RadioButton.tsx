interface RadioButtonProps {
    buttonName: string;
    itemIndex: string | boolean;
    currentSelected: string | boolean;
    onClick: () => void;
}

export default function RadioButton({ buttonName, itemIndex, currentSelected, onClick }: RadioButtonProps) {
    const isActive = itemIndex === currentSelected;

    return (
        <div
            className={`flex justify-center w-full px-4 py-2 rounded-full border ${isActive ? 'bg-zinc-800 text-white border-zinc-800' : 'border-zinc-400'}`}
            onClick={onClick}
        >
            {buttonName}
        </div>
    );
}
