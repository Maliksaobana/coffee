import {useEffect, useRef, useState} from "react";


const PriceWrapper = () => {
    const [priceValue, setPriceValue] = useState('00.00');
    const [pricePerLiter, setPricePerLiter] = useState('00.00')
    const timerRef = useRef<number>(null);
    const inputTimerRef = useRef<number>(null);
    const btnRef = useRef<HTMLButtonElement>(null)
    const inputRef = useRef<number>(null);
    const countRef = useRef<number | undefined>(0)
    const priceRef = useRef<number | undefined>(0)
    const priceSecRef = useRef<number | undefined>(0)


    useEffect(() => {
        inputTimerRef.current = setTimeout(()=>{
            inputRef.current = Number(priceValue)
            console.log(inputRef.current)
        },800)
        return () => clearTimeout(inputTimerRef.current!)
    }, [priceValue]);

    function increaseTimer() {
        if(timerRef.current === undefined) clearInterval(timerRef.current)
        timerRef.current = setInterval(() =>{
            priceSecRef.current = priceSecRef.current! === 99 ? priceSecRef.current = 0 : priceSecRef.current! + 1;
            priceRef.current = priceSecRef.current! === 0 ? priceRef.current!  + 1: priceRef.current;
            countRef.current = 1370 * Number(priceRef.current! + '.'+ (priceSecRef.current < 10 ? '0'+ priceSecRef.current : priceSecRef.current));


            setPriceValue(String(Math.floor(countRef.current)))
            setPricePerLiter(priceRef.current! + '.'+ (priceSecRef.current < 10 ? '0'+ priceSecRef.current : priceSecRef.current))

            if(countRef.current === inputRef.current) {
                clearInterval(timerRef.current!)
                btnRef.current!.textContent = 'reset'
            }
        },500)

    }

    function restCallValues() {
        setPriceValue('00.00')
        setPricePerLiter('00.00')
        inputRef.current = 0
        priceRef.current = 0
        priceSecRef.current = 0
        countRef.current = 0
    }

    function toggleAction() {
        if(priceValue.trim() === '00.00' && pricePerLiter.trim() === '00.00') return
        if(btnRef.current!.textContent === 'reset') {
            restCallValues()
            btnRef.current!.textContent = 'start'
        }else {
            increaseTimer()
        }


    }

    function stopTimer() {
        clearInterval(timerRef.current!)
    }



    return (
        <div className="flex flex-col w-full items-center md:w-120 border p-4 space-y-4 rounded-lg">
            <div className="text-center capitalize font-bold text-xl">
                <h1>Marco pump</h1>
            </div>
            <div className="border w-60 flex items-center justify-center mx-auto flex-col">
                <input type="text" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} className='w-full text-2xl font-bold font-mono text-end px-2 outline-none pt-3'/>
                <input type="text" value={pricePerLiter}  className='w-full text-end px-2 pb-2 font-bold font-mono outline-none text-2xl'/>
            </div>
            <div className="w-60 flex gap-4">
                <button
                    onClick={stopTimer}
                    className="border rounded-lg capitalize font-bold text-xl cursor-pointer flex-1 px-6 py-1 ouline-non">stop</button>
                <button
                    ref={btnRef}
                    onClick={toggleAction}
                    className="border rounded-lg capitalize font-bold text-xl cursor-pointer flex-1 px-6 py-1 ouline-non">start</button>
            </div>
        </div>
    );
};

export default PriceWrapper;