import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import tw from 'twrnc';
interface InfoModalProps {
    isShow: boolean;
    handleClose: () => void;
}
export const InfoModal: React.FC<InfoModalProps> = ({
    isShow,
    handleClose,
}) => {
    return (
        <View
        style={tw`
            absolute
            left-0
            top-0
            bottom-0
            right-0
            min-h-full
            justify-center
            items-center
            bg-[rgba(0,0,0,0.5)]
            p-5
            px-2.5
            ${!isShow ? 'hidden' : 'flex'}
        `}>
            <View style={tw`flex flex-col gap-4 items-center bg-white rounded px-3 py-5 `}>
                <Text style={tw`font-bold text-xl`}>Как играть?</Text>
                <View style={tw`flex flex-col gap-2`}>
                    <Text style={tw`text-base`}>
                        Цель игры угадать загаданное слово.{"\n"}
                        Для этого игрок:{"\n"}
                        Вводит 5-ти буквенное слово из русского языка{"\n"}
                        Нажимает кнопку "Проверить слово"
                    </Text>
                    <Text style={tw`text-base`}>
                        После этого буквы введенного слова окрашиваются по
                        правилу:
                    </Text>
                    <View style={tw`flex flex-row flex-wrap justify-center items-center w-full  gap-[12px]`}>
                        <View style={tw`flex flex-col gap-1.5 justify-center items-center max-w-[150px]`}>
                            <View
                                style={tw`
                                    flex 
                                    items-center
                                    justify-center
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-gray-600
                                    opacity-75
                                `}
                            >
                                <Text style={tw`text-xl text-gray-600 font-bold uppercase`}>А</Text>
                            </View>
                            <Text style={tw`text-center font-semibold leading-[18px] text-gray-600`}>
                                Буквы нет в загаданном слове
                            </Text>
                        </View>
                        <View style={tw`flex flex-col gap-1.5 items-center max-w-[150px]`}>
                            <View
                                style={tw`
                                    flex 
                                    items-center
                                    justify-center
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-yellow-400 
                                `}
                            >
                                <Text style={tw`text-xl font-bold uppercase text-yellow-400`}>Б</Text>
                            </View>
                            <Text style={tw`text-center font-semibold leading-[18px] text-yellow-400`}>
                                Буква есть в загаданном слове, но на другом
                                месте
                            </Text>
                        </View>
                        <View style={tw`flex flex-col gap-1.5 items-center max-w-[150px]`}>
                            <View
                                style={tw`
                                    flex 
                                    items-center
                                    justify-center
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-green-700 
                                `}
                            >
                                <Text style={tw`text-xl font-bold uppercase text-green-700`}>В</Text>
                            </View>
                            <Text style={tw`text-center font-semibold leading-[18px] text-green-700`}>
                                Буква в загаданном слове на этом месте
                            </Text>
                        </View>
                    </View>
                    <Text style={tw`text-base`}>
                        Игрок выиграл если успел отгадать слово за 5 попыток.{"\n"}
                        В противном случае он проиграл.
                    </Text>
                </View>
                <TouchableOpacity
                    style={tw`
                        flex
                        px-5
                        py-3
                        rounded
                        bg-green-500
                    `}
                    onPress={() => handleClose()}>
                        <Text style={tw`text-white`}>Закрыть</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
