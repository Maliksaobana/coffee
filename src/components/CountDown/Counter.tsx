import {useRef, useState} from "react";


const Counter = () => {
    const minutesRef = useRef(0)
    const secondsRef = useRef(0) // useRef removes the useEffect problem
    const [counterMinutes, setCounterMinutes] = useState<number>(minutesRef.current)
    const [counterSeconds, setCounterSeconds] = useState<number>(secondsRef.current)
    const [buttonControls, setButtonControls] = useState<string>('start')
    const timerHandler = useRef<number | undefined >(undefined)

    const startTimer = () => {
        if(timerHandler.current === undefined) clearTimeout(timerHandler.current)
        timerHandler.current = setInterval(()=> {
            secondsRef.current = secondsRef.current === 59 ? 0 : secondsRef.current + 1
            minutesRef.current = secondsRef.current === 0 ? minutesRef.current + 1 : minutesRef.current

            setCounterMinutes(minutesRef.current)
            setCounterSeconds(secondsRef.current)
        },1000)
    }


    const toggleTimerAction = () => {
        // changes the buttons to enable users experience
        setButtonControls(currentValue => currentValue === 'start' ? 'pause' : 'start')
        // controls the pause and play effects
        if(buttonControls === 'pause') {
            pauseTimer() // call the pause function on the timer control
        }else {
            startTimer() // call the start timer function nevertheless
        }
    }

    const pauseTimer = () => {
        clearInterval(timerHandler.current) // clear timerHandler.current
    }

    const stopTimer = () => {
        clearInterval(timerHandler.current)
        setButtonControls("start")
        minutesRef.current = 0
        secondsRef.current = 0
        setCounterMinutes(minutesRef.current)
        setCounterSeconds(secondsRef.current)
    }


    return (
        <>
            <div className="border w-50 p-2 items-center flex flex-col flex-nowrap rounded-sm shadow shadow-yellow-600">
                <div className="">
                    <h1 className='capitalize text-[1rem] font-semibold'>start counter</h1>
                </div>
                <div className="my-5 w-full flex items-center justify-center">
                    <h1 className='text-3xl font-bold'><span>{counterMinutes < 10 ? '0' + counterMinutes : counterMinutes}</span> : <span>{counterSeconds < 10 ? '0' + counterSeconds : counterSeconds}</span></h1>
                </div>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap w-full">
                    <button onClick={toggleTimerAction} className={`border cursor-pointer ${buttonControls !== 'pause' ? "w-full" : "w-full sm:w-1/2"} h-8 rounded font-semibold text-sm capitalize`}>{buttonControls}</button>
                    {buttonControls === 'pause' && <button onClick={stopTimer} className='border cursor-pointer w-full sm:w-1/2 h-8 rounded font-semibold text-sm capitalize'>stop</button>}
                </div>
            </div>
        </>
    );
};

export default Counter;