import React from 'react';
import { View, Text } from 'react-native'
import tw from 'twrnc';
interface SymbolCellProps {
    symbol: string;
    symbolState: number;
}
export const SymbolCell: React.FC<SymbolCellProps> = ({
    symbol,
    symbolState,
}) => {
    return (
        <View
            style={tw`
            flex 
            items-center
            justify-center
            text-3x1
            font-bold
            uppercase
            rounded
            border-2
            w-13
            h-13
            
            ${symbolState === 0 ? 'border-white text-white' : ''}
            ${symbolState === 1 ? 'border-white text-white opacity-75' : ''}
            ${symbolState === 2 ? 'border-yellow-400 text-yellow-400	' : ''}
            ${symbolState === 3 ? 'border-green-700 text-green-700' : ''}
            `}
        >
            <Text>{symbol}</Text>
        </View>
    );
};
