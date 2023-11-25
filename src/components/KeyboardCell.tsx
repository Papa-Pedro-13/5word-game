import React from 'react';
interface KeyboardCellProps {
    symbol: string;
    handleAddSymbol: (symbol: string) => void;
}
export const KeyboardCell: React.FC<KeyboardCellProps> = ({
    symbol,
    handleAddSymbol,
}) => {
    return (
        <div
            onClick={() => handleAddSymbol(symbol)}
            className='flex items-center justify-center text-xl font-semibold uppercase rounded border w-8 h-8 border-white text-white cursor-pointer select-none hover:opacity-50 '
        >
            {symbol}
        </div>
    );
};
