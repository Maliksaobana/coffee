import React, {createContext, type Dispatch, type SetStateAction, useState} from "react";


interface Props {
    children: React.ReactNode;
}


interface Values{
    contextValue: string;
    setContextValue: Dispatch<SetStateAction<string>>;
}




export const MyFurtherContext = createContext<Values>({} as Values);

export const MyProvider = ({children}: Props) => {
    const [contextValue, setContextValue] = useState('hello what went wrong')

    return (
        <MyFurtherContext value={{contextValue,setContextValue}}>
            {children}
        </MyFurtherContext>
    )
}