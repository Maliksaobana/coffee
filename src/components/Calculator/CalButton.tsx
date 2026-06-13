import React from "react";

interface ButtonProps {
    text: string;
    toUpperCase?: boolean;
    className?: string;
    onClick?: (e:React.MouseEvent) => void;
}

const CalButton = ({text,onClick,className,toUpperCase} : ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`border px-3 py-1.5 ${toUpperCase && 'uppercase'} rounded-lg cursor-pointer text-[1rem] font-semibold ${className}`}
        >{text}</button>
    );
};

export default CalButton;