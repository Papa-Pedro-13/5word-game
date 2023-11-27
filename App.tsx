import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import { StringField } from './components/StringField';
import { words } from './data';
import { Keyboard } from './components/Keyboard';
import Icon from 'react-native-vector-icons/AntDesign';
import { InfoModal } from './components/InfoModal';
import RNRestart from 'react-native-restart';
import tw from 'twrnc';

function App() {
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [secretWord, setSecretWord] = useState(0);
  const [checkedSymbols, setCheckedSymbols] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [modalInfo, setModalInfo] = useState(false);
  const [stringArr, setStringArr] = useState<string[]>([
      '     ',
      '     ',
      '     ',
      '     ',
      '     ',
  ]);
  useEffect(() => {
      setSecretWord(Math.floor(Math.random() * words.length));
      setCheckedSymbols([]);
      setStringArr(['     ', '     ', '     ', '     ', '     ']);
      setCurrentRow(0);
      setCurrentSymbol(0);
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      items: "center",
    },
  });
  const handleDeleteSymbol = () => {
      console.log(currentSymbol);
      if (currentSymbol === 0) return;
      const cur = currentSymbol;
      setCurrentSymbol(currentSymbol - 1);
      setStringArr(
          stringArr.map((item, index) => {
              if (index === currentRow) {
                  return (
                      item.slice(0, cur - 1) +
                      ' ' +
                      item.slice(cur, item.length)
                  );
              }
              return item;
          })
      );
  };
  const handleAddSymbol = (symbol: string) => {
      if (currentSymbol === 5) {
          return;
      }

      setStringArr(
          stringArr.map((item, index) => {
              if (index === currentRow) {
                  setCurrentSymbol(currentSymbol + 1);
                  return (
                      item.slice(0, currentSymbol) +
                      symbol +
                      item.slice(currentSymbol + 1, item.length)
                  );
              }
              return item;
          })
      );
  };
  const checkWord = () => {
      if (!words.includes(stringArr[currentRow])) {
          Alert.alert("Такого слова нет в словаре!");
          return;
      }
      if (stringArr[currentRow] === words[secretWord]) {
          setCurrentRow(currentRow + 1);
          setModalTitle('Вы победили!');
          return;
      }
      if (currentRow === 4) {
          setModalTitle(
              'Вы проиграли! Загаданное слово: ' + words[secretWord]
          );
          return;
      }
      for (let i = 0; i < stringArr[currentRow].length; i++) {
          if (checkedSymbols.includes(stringArr[currentRow][i])) continue;
          setCheckedSymbols((prev) => [...prev, stringArr[currentRow][i]]);
      }
      setCurrentRow(currentRow + 1);
      setCurrentSymbol(0);
  };
  const startReload = ()=> RNRestart.Restart();
  return (
    <View>
          <View style={tw`bg-gray-600 min-h-300 flex flex-col gap-4 items-center justify-center py-24 relative pt-80`}>
              <View style={tw`absolute top-10 right-10 rounded-full border-[3px] border-white p-1.5 hover:opacity-50`}>
                  <TouchableOpacity
                      onPress={() => setModalInfo(true)}>
                      <Icon name="question" size={30} color="white" />
                  </TouchableOpacity>
              </View>
              <Text style={tw`font-bold text-white text-3xl mb-10`}>
                  Игра «5 букв»
              </Text>
              <View style={tw`flex flex-col gap-1`}>
                  {stringArr.map((item, index) => (
                      <StringField
                          key={index}
                          word={item.split('')}
                          secretWord={words[secretWord]}
                          isPast={index < currentRow}
                      />
                  ))}
              </View>
              <TouchableOpacity
                style={tw`flex px-5 py-3 rounded bg-green-500 disabled:opacity-50`}
                onPress={() => checkWord()}
                disabled={currentSymbol !== 5}
              ><Text style={tw`text-white `}>Проверить слово</Text>
              </TouchableOpacity>
              <View style={styles.container}>
                <Keyboard
                  handleAddSymbol={handleAddSymbol}
                  handleDeleteSymbol={handleDeleteSymbol}
                  checkedSymbols={checkedSymbols}/>
                <InfoModal
                  isShow={modalInfo}
                  handleClose={function () {
                      setModalInfo(false)
                  }}
                />
              </View>
              <View 
                    style={tw`
                absolute
                inset-0
                min-h-full
                justify-center
                items-center
                bg-[rgba(0,0,0,0.5)]
                p-5
                    ${modalTitle === '' ? 'hidden' : 'flex'}
                `}
                >
                    <View style={tw`flex flex-col gap-5 items-center bg-white rounded p-10`}>
                        <Text style={tw`font-bold text-lg`}>{modalTitle}</Text>
                        <TouchableOpacity
                            style={tw`flex px-5 py-3 rounded bg-amber-800`}
                            onPress={() => startReload}
                        >
                            <Text style={tw`text-white`}>Сыграть заново</Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </View>
    </View>
  );
}

export default App;