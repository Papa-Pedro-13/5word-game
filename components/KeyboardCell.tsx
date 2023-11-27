import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
interface KeyboardCellProps {
    symbol: string;
    checked: boolean;
    handleAddSymbol: (symbol: string) => void;
}
export const KeyboardCell: React.FC<KeyboardCellProps> = ({
    symbol,
    handleAddSymbol,
    checked,
}) => {
    return (
        <TouchableOpacity
            onPress={() => handleAddSymbol(symbol)}
            style={tw`flex items-center justify-center rounded border w-9 h-9 border-white hover:opacity-50 ${
                checked ? 'opacity-50' : ''
            }`}
        >
            <Text style={tw`text-xl font-semibold uppercase text-white`}>{symbol}</Text>
        </TouchableOpacity>
    );
};
