import {MyContext} from "./TypeContext.tsx";
import {useContext, useState} from "react";
// import * as React from "react";


interface ThemeColor {
    color : string;
}


const MyTheme = () => {
    // @ts-ignore
    const {userTheme,setUserTheme} = useContext(MyContext);

    function ChangeTheme() {
        color === 'white' ? color = 'black' : color = 'white';

        setUserTheme({...userTheme, color:color})

    }

    let {color} = userTheme
    return (
        <>
            <div className="flex rounded flex-col w-full p-3 sm:w-72 h-56" style={{
                backgroundColor:`${color}`
            }}>
                <div className="text-center capitalize text-2xl font-bold mb-2">
                    <h1 style={{
                        color: `${color === "white" ? "black" : "white"}`,
                    }}>header</h1>
                </div>
                <div className="flex-1">
                    <p style={{
                        color: `${color === "white" ? "black" : "white"}`,
                    }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores at deserunt dolor excepturi facilis in maiores maxime
                        numquam veritatis, vero?
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{
                    color: `${color === "white" ? "white" : "black"}`
                }}>
                    <button style={{
                        backgroundColor: `${color === "white" ? "black" : "white"}`,
                    }} onClick={ChangeTheme} className='py-1 px-8 cursor-pointer text-[1rem] rounded font-bold capitalize'>switch</button>
                </div>
            </div>
        </>
    )
}




const listingItems = () => {
    const [userTheme, setUserTheme] = useState<ThemeColor>({color:"white"})

    // @ts-ignore
    return (
        <>
            <MyContext value={{userTheme,setUserTheme}}>
                <MyTheme />
            </MyContext>
        </>
    )
}

export default listingItems