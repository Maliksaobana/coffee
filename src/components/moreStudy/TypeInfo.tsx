import {MainContextProvider} from "./ContextProvider.tsx";
import MainApp from "./MainApp.tsx";

const TypeInfo = () => {
    return (
        <>
            <div>
                <MainContextProvider>
                    <MainApp />
                </MainContextProvider>
            </div>
        </>
    );
};

export default TypeInfo;