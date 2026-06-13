import {useEffect, useRef, useState} from "react";

interface debounceProps {
    value: string;
    delay: number;
}

export const useDebounce = ({value,delay}: debounceProps) => {
    const [debounceValue, setDebounceValue] = useState<string>('')
    const timerRef = useRef<number>(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setDebounceValue(value)
        },delay)

        return () => clearTimeout(timerRef.current!)
    },[value])

    return debounceValue
}
