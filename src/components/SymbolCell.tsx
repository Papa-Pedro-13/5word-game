import React from 'react';
interface SymbolCellProps {
    symbol: string;
    symbolState: number;
}
export const SymbolCell: React.FC<SymbolCellProps> = ({
    symbol,
    symbolState,
}) => {
    return (
        <div
            className={`
            flex 
            items-center
            justify-center
            text-3xl
            font-bold
            uppercase
            rounded
            border-2
            w-12
            h-12
            border-white
            text-white
            ${symbolState === 1 ? 'opacity-75' : ''}
            ${symbolState === 2 ? 'border-yellow-400 text-yellow-400	' : ''}
            ${symbolState === 3 ? 'border-green-700 text-green-700' : ''}
            `}
        >
            {symbol}
        </div>
    );
};
