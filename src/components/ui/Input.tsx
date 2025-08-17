interface InputProps {
    labelName: string;
    inputType: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ labelName, inputType, placeholder, value, onChange }: InputProps) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor={labelName} className="w-full">
                {labelName}
            </label>
            <input
                type={inputType}
                className="w-full py-3 px-1 pl-6 pr-6 border bg-gray-200 border-gray-100 rounded-4xl"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Input;
