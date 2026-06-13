import CalButton from "./CalButton.tsx";
import InputHolder from "./InputHolder.tsx";
import { useState } from "react";


const CalculatorWrapper = () => {
    const [inputValues, setInputValues] = useState<string>('')

    const showAnswer = () => {
        setInputValues(eval(inputValues))
    }
    const clearInput = () => {
        setInputValues('')
    }
    const floatAnswer = () => {
        const convertToNumber = Number(inputValues)
        const evalNumber = convertToNumber.toFixed(3)

        setInputValues(evalNumber)
    }
    const sliceValue = () => {
        if (inputValues.trim() === '') return
        const sliceWord = inputValues.split('').slice(0, -1).join('')

        setInputValues(sliceWord.length === 0 ? '' : sliceWord)
    }


    return (
        <div className='border w-full md:w-120 sm:w-100 p-4 rounded-lg gap-2.5 flex flex-col flex-nowrap'>
            <header>
                <InputHolder value={inputValues} onChange={setInputValues} />
            </header>
            <aside className='flex gap-2.5 flex-col w-full space-x-2'>
                <div className='flex w-full space-x-2'>
                    <CalButton text='ce' onClick={sliceValue} className='flex-1' toUpperCase={true}/>
                    <CalButton text='c'  onClick={clearInput} className='flex-1' toUpperCase={true}/>
                    <CalButton text=')'  className='flex-1' onClick={()=>setInputValues(prev => prev + ')')}/>
                    <CalButton text='F'  onClick={floatAnswer} className='flex-1' toUpperCase={true}/>
                </div>
                <div className='flex w-full space-x-2'>
                    <CalButton text='('  className='flex-1' onClick={()=>setInputValues(prev => prev + '(')}/>
                    <CalButton text='/'  className='flex-1' onClick={()=>setInputValues(prev => prev + '/')}/>
                    <CalButton text='*'  className='flex-1' onClick={()=>setInputValues(prev => prev + '*')}/>
                    <CalButton text='-'  className='flex-1' onClick={()=>setInputValues(prev => prev + '-')}/>
                </div>
            </aside>
            <section className='w-full grid grid-cols-4 auto-rows-fr gap-2'>
                <CalButton text='7'  onClick={()=>setInputValues(prev => prev + '7')}/>
                <CalButton text='8'  onClick={()=>setInputValues(prev => prev + '8')}/>
                <CalButton text='9'  onClick={()=>setInputValues(prev => prev + '9')}/>
                <CalButton text='+'  onClick={()=>setInputValues(prev => prev + '+')} className='row-span-2' />
                <CalButton text='4'  onClick={()=>setInputValues(prev => prev + '4')}/>
                <CalButton text='5'  onClick={()=>setInputValues(prev => prev + '5')}/>
                <CalButton text='6'  onClick={()=>setInputValues(prev => prev + '6')}/>
                <CalButton text='1'  onClick={()=>setInputValues(prev => prev + '1')}/>
                <CalButton text='2'  onClick={()=>setInputValues(prev => prev + '2')}/>
                <CalButton text='3'  onClick={()=>setInputValues(prev => prev + '3')}/>
                <CalButton text='='  onClick={showAnswer} className='row-span-2' />
                <CalButton text='0'  onClick={()=>setInputValues(prev => prev + '0')} className='col-span-2' />
                <CalButton text='.'  onClick={()=>setInputValues(prev => prev + '.')}/>
            </section>
        </div>
    );
};

export default CalculatorWrapper;