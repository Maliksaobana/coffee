import * as React from "react";
import {useState} from "react";

type TodoProps = {
    myName: string,
    children: React.ReactNode,
    age?: number,
    clickBtn : () => void
}

const TryTypeInterface = ({myName,clickBtn,age,children}: TodoProps) => {

    return (
        <>
            <div>
                <h1>{myName}</h1>
                <h2>{age}</h2>

                <div className="">
                    {children}
                </div>
                <div className="">
                    <button onClick={clickBtn} className='border py-1 px-5 rounded-sm'>click</button>
                </div>
            </div>
        </>
    )
}

const Todo = () => {

    const [userName, setUserName] = useState('malik')

    function ClickBtn() {
        setUserName((Name):string => {
            if(Name === 'malik') {
                return Name = "joy"
            }else {
                return Name = "malik"
            }
        })
    }

    return (
        <>
            <div>
                <TryTypeInterface clickBtn={ClickBtn} myName={userName} age={26}>
                    <h1>hello world</h1>
                </TryTypeInterface>
            </div>
        </>
    )
}

export default Todo