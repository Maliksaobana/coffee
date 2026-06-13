import {useState} from "react";
import customHook from './everyExport.ts'

type StringValues = string

const DebounceWrapper = () => {
    const [searchTerm, setSearchTerm] = useState<StringValues>('')


    // I am using React JS, onChange change on every render, useState is async in nature
    // need a function that only works when the user stop typing

    const debounceTerm = customHook.useDebounce({value:searchTerm, delay:1000})


    return (
        <div>
            <h1>debounce</h1>
            <div className="flex w-80 flex-col space-y-2">
                <input type="text"
                       className='border w-full outline-none p-1 text-[1rem]'
                       value={searchTerm}
                       onChange={e => setSearchTerm(e.target.value)}/>
                <h2 className='font-bold mt-1 text-sm'>{debounceTerm}</h2>
            </div>
        </div>
    );
};

export default DebounceWrapper;