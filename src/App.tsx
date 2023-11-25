import { useEffect, useState } from 'react';
import { StringField } from './components/StringField';
import { words } from './data';
import { Keyboard } from './components/Keyboard';
import { BsQuestionLg } from 'react-icons/bs';
import { InfoModal } from './components/InfoModal';

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
        // setSecretWord(1937);
        setCheckedSymbols([]);
        setStringArr(['     ', '     ', '     ', '     ', '     ']);
        setCurrentRow(0);
        setCurrentSymbol(0);
    }, []);

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
            // setCurrentRow(currentRow + 1);
            // setCurrentSymbol(0);
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
            alert('Такого слова нет в словаре!');
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

    return (
        <>
            <div className='bg-gray-600 min-h-[100vh] flex flex-col gap-4 items-center justify-center py-24 relative'>
                <div className='absolute top-10 right-10 rounded-full border-[3px] border-white p-1.5 cursor-pointer hover:opacity-50'>
                    <BsQuestionLg
                        color={'white'}
                        size={30}
                        onClick={() => setModalInfo(true)}
                    />
                </div>
                <h1 className='font-bold text-white text-3xl mb-10'>
                    Игра «5 букв»
                </h1>
                <div className='flex flex-col gap-1'>
                    {stringArr.map((item, index) => (
                        <StringField
                            key={index}
                            word={item.split('')}
                            secretWord={words[secretWord]}
                            isPast={index < currentRow}
                        />
                    ))}
                </div>
                <button
                    type='button'
                    className={`cursor-pointer flex px-5 py-3 rounded text-white bg-green-500 select-none disabled:opacity-50`}
                    onClick={() => checkWord()}
                    disabled={currentSymbol !== 5}
                >
                    Проверить слово
                </button>
                <Keyboard
                    handleAddSymbol={handleAddSymbol}
                    handleDeleteSymbol={handleDeleteSymbol}
                    checkedSymbols={checkedSymbols}
                />
                <InfoModal
                    isShow={modalInfo}
                    handleClose={function () {
                        setModalInfo(false);
                    }}
                />
                <div
                    className={`
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
                    <div className='flex flex-col gap-5 items-center bg-white rounded p-10 '>
                        <div className='font-bold text-lg'>{modalTitle}</div>
                        <button
                            type='button'
                            className={`cursor-pointer flex px-5 py-3 rounded text-white bg-amber-800 select-none`}
                            onClick={() => window.location.reload()}
                        >
                            Сыграть заново
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
