import {createContext, type ReactNode, useState} from "react";
import type {MyContextValue, UsersDetails} from "./TypeIndex.ts";


interface ContextProviderProps {
    children: ReactNode;
}

export const MainContext = createContext<MyContextValue>({} as MyContextValue);


export const MainContextProvider = ({children} : ContextProviderProps) => {
    const [users, setUsers] = useState<UsersDetails | null>(null);


    return (
        <MainContext value={{users,setUsers}}>
            {children}
        </MainContext>
    )
}