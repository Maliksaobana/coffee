
interface InputProps {
    onChange: (value: string) => void;
    value: string;
}


const InputHolder = ({value,onChange}:InputProps) => {

    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            inputMode={'numeric'}
            maxLength={12}
            className='border rounded-lg caret-amber-600 text-end w-full outline-none pt-6 leading-0 text-5xl pr-0.5 font-bold'/>
    );
};

export default InputHolder;