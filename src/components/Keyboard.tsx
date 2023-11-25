import React from 'react';
import { KeyboardCell } from './KeyboardCell';
interface KeyboardProps {
    handleAddSymbol: (symbol: string) => void;
    handleDeleteSymbol: () => void;
    checkedSymbols: string[];
}
export const Keyboard: React.FC<KeyboardProps> = ({
    handleAddSymbol,
    handleDeleteSymbol,
    checkedSymbols,
}) => {
    const abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    return (
        <div className='flex flex-wrap px-10 gap-1 max-w-[510px]'>
            {abc.split('').map((item) => (
                <KeyboardCell
                    key={item}
                    checked={checkedSymbols.includes(item)}
                    symbol={item}
                    handleAddSymbol={handleAddSymbol}
                />
            ))}
            <div
                onClick={() => handleDeleteSymbol()}
                className='flex items-center justify-center text-lg font-medium uppercase rounded border-2 w-[104px] h-8 border-red-600 text-red-600 cursor-pointer select-none'
            >
                Удалить
            </div>
        </div>
    );
};
