import React from 'react';
import { SymbolCell } from './SymbolCell';
import { Text,View } from 'react-native'
import tw from 'twrnc';
interface StringFieldProps {
    word: string[];
    secretWord: string;
    isPast: boolean;
}
export const StringField: React.FC<StringFieldProps> = ({
    word,
    secretWord,
    isPast,
}) => {
    let id = 0
    const content = word.map((symbol, index) => {
        let symbolState = 0;
        if (isPast) {
            if (secretWord.includes(symbol)) {
                symbolState = 2;
                if (symbol === secretWord[index]) {
                    symbolState = 3
                }
            } else {
                symbolState = 1
            }
        }

        return (
            <SymbolCell key={id++} symbol={symbol} symbolState={symbolState} />
        )
    })
    return <View style={tw`flex flex-row gap-1`}>{content}</View>
};
