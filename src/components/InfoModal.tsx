import React from 'react';
interface InfoModalProps {
    isShow: boolean;
    handleClose: () => void;
}
export const InfoModal: React.FC<InfoModalProps> = ({
    isShow,
    handleClose,
}) => {
    return (
        <div
            className={`
        absolute
        inset-0
        min-h-full
        justify-center
        items-center
        bg-[rgba(0,0,0,0.5)]
        px-10
        ${!isShow ? 'hidden' : 'flex'}
    `}
        >
            <div className='flex flex-col gap-5 items-center bg-white rounded p-10 py-5 '>
                <div className='font-bold text-xl'>Как играть?</div>
                <div className='flex flex-col gap-2'>
                    <div className='text-lg w-full'>
                        Цель игры угадать загаданное слово.
                        <br />
                        Для этого игрок:
                    </div>
                    <ol className='list-decimal text-lg w-full pl-4'>
                        <li>Вводит 5-ти буквенное слово из русского языка</li>
                        <li>Нажимает кнопку "Проверить слово"</li>
                    </ol>
                    <div className='text-lg'>
                        После этого буквы введенного слова окрашиваются по
                        правилу:
                    </div>
                    <div className='flex flex-wrap justify-center gap-[12px]'>
                        <div className='flex flex-col gap-1.5 items-center max-w-[150px]'>
                            <div
                                className={`
                                    flex 
                                    items-center
                                    justify-center
                                    text-xl
                                    font-bold
                                    uppercase
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-gray-600
                                    text-gray-600
                                    opacity-75
                                
                                `}
                            >
                                А
                            </div>
                            <div className='text-center font-semibold leading-[18px] text-gray-600'>
                                Буквы нет в загаданном слове
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5 items-center max-w-[150px]'>
                            <div
                                className={`
                                    flex 
                                    items-center
                                    justify-center
                                    text-xl
                                    font-bold
                                    uppercase
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-yellow-400 text-yellow-400
                                  
                                
                                `}
                            >
                                Б
                            </div>
                            <div className='text-center font-semibold leading-[18px] text-yellow-400'>
                                Буква есть в загаданном слове, но на другом
                                месте
                            </div>
                        </div>
                        <div className='flex flex-col gap-1.5 items-center max-w-[150px]'>
                            <div
                                className={`
                                    flex 
                                    items-center
                                    justify-center
                                    text-xl
                                    font-bold
                                    uppercase
                                    rounded
                                    border-2
                                    w-8
                                    h-8
                                    border-green-700 text-green-700
                                    
                                
                                `}
                            >
                                В
                            </div>
                            <div className='text-center font-semibold leading-[18px] text-green-700'>
                                Буква в загаданном слове на этом месте
                            </div>
                        </div>
                    </div>
                    <div className='text-lg'>
                        Игрок выиграл если успел отгадать слово за 5 попыток.
                        <br />В противном случае он проиграл.
                    </div>
                </div>
                <button
                    type='button'
                    className={`
                        cursor-pointer
                        flex
                        px-5
                        py-3
                        rounded
                        text-white
                        bg-green-500
                        select-none
                    `}
                    onClick={() => handleClose()}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};
