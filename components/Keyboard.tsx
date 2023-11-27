import React from 'react';
import { KeyboardCell } from './KeyboardCell';
import { Text, View, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
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
        <View style={tw`flex flex-wrap flex-row px-10 gap-1 mb-3`}>
            {abc.split('').map((item) => (
                <KeyboardCell
                    key={item}
                    checked={checkedSymbols.includes(item)}
                    symbol={item}
                    handleAddSymbol={handleAddSymbol}
                />
            ))}
            <TouchableOpacity
                onPress={() => handleDeleteSymbol()}
                style={tw`flex items-center justify-center text-lg font-medium uppercase rounded border px-2.5 h-9 border-red-600`}
            >
                <Text style={tw`text-red-600`}>Удалить</Text>
            </TouchableOpacity>
        </View>
    );
};
