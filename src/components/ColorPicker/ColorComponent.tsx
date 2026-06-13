import {type MouseEvent} from "react";


interface ColorComponentProps {
    color: string;
    text: string;
    onClick: (e: MouseEvent) => void;
}


const ColorComponent = ({color,text,onClick}: ColorComponentProps) => {
    return (
        <div
            className='flex flex-col bg-white w-full cursor-pointer overflow-hidden rounded-md items-center'>
            <div className='h-full w-full' style={{
                backgroundColor: color,
            }}></div>
            <div
                onClick={onClick}
                className="my-2 ">
                <h5 className='font-semibold text-sm'>{text}</h5>
            </div>
        </div>
    );
};

export default ColorComponent;