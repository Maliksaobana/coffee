import ColorComponent from "./ColorComponent.tsx";
import {type MouseEvent, useState} from "react";

function getColorValues() : string[] {
    const alphabets:string = 'abcdef1234567890abcdef',
        colorArray:string[] = [];
    let startHash:string = '#'

    const shuffleColor = alphabets.split('');

    for (let i = 0; i < shuffleColor.length; i++) {
        const randomWord = Math.floor(Math.random() * shuffleColor.length);
        [shuffleColor[i], shuffleColor[randomWord]] = [shuffleColor[randomWord], shuffleColor[i]];
    }

    const wordJoin = shuffleColor.splice(0,6).join('');

    while(colorArray.length <= 0) {
        startHash += wordJoin;
        colorArray.push(startHash);
    }

    return colorArray;

}

function generateColor() {
    const arrayOfColors = []
    for (let i = 0; i < 8; i++) {
        arrayOfColors.push(getColorValues());
    }

    return arrayOfColors.flat();
}


const MainPage = () => {

    const [colorOptions, setColorOptions] = useState<string[]>(generateColor());

    function generateNewColorPallet() {
        const randomColor = generateColor();
        setColorOptions(randomColor);
    }

    function clickColor(e: MouseEvent) {
        // @ts-ignore
        const oldValue = e.target.textContent
        navigator.clipboard
            // @ts-ignore
            .writeText(e.target.textContent)
            .then(() =>{
                // @ts-ignore
                e.target.textContent = 'copied'
                // @ts-ignore
                e.target.style.color = 'green';
                setTimeout(()=>{
                    // @ts-ignore
                    e.target.textContent = oldValue
                    // @ts-ignore
                    e.target.style.color = 'black';
                },1000)
            })
            .catch(err => console.log(err.message))

    }


    return (
        <div className='flex flex-col px-3 py-3 gap-4 items-center justify-center w-100  border rounded-sm shadow-2xs shadow-neutral-500'>
            <h1 className='uppercase font-bold text-2xl'>color pallet</h1>
            <div className="grid h-110 md:h-100 lg:h-60 grid-cols-2 my-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 w-full">
                {colorOptions.map(color => <ColorComponent
                    onClick={clickColor} key={color} color={color} text={color} />)}
            </div>
            <button
                onClick={() => generateNewColorPallet()}
                className="bg-[#2DF01C] mb-1 hover:outline-[#3BFD7B] text-[#0F1E2C] hover:outline-offset-3 hover:outline px-15 py-2 rounded-4xl capitalize cursor-pointer font-bold">generate color</button>
        </div>
    );
};

export default MainPage;