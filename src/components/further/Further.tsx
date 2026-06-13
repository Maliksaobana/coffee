import {MyFurtherContext, MyProvider} from "./MoreContext.tsx";
import {useContext} from "react";


const ComponentTwo = ()=> {
    const {setContextValue} = useContext(MyFurtherContext)
    return (
        <>
            <button onClick={() => setContextValue('did u')}>click</button>
        </>
    )
}

const ComponentCheck = () =>{
    const {contextValue} = useContext(MyFurtherContext)
    return (
        <div>
            <h1>{contextValue}</h1>
            <ComponentTwo />
        </div>
    )
}

const Further = () => {
    return (
        <div>
            <MyProvider>
                    <ComponentCheck />
            </MyProvider>
        </div>
    );
};

export default Further;