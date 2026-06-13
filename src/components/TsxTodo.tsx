import {useState} from "react";

type MyArr<Type> = Type[]


let myArrObject = {
    id: 1,
    text:'fix my nails',
    completed: false,
}

export default function TsxTodo() {
    const [items, setItems] = useState<MyArr<object>>([myArrObject])



    return (

        <>
            <div className="">
                {items.map((item) => (
                    <div key={item.id}>
                        <h1>{item.text}</h1>
                    </div>
                ))}
            </div>

            <button className='border py-1 px-6' >click</button>
        </>
    )
}