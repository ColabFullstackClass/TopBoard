interface InputProps {
    labelName: string;
    inputType: string;
    placeholder: string;
}
const Input = ({ labelName, inputType, placeholder }: InputProps) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor={labelName} className="w-full">
                {labelName}
            </label>
            <input
                type={inputType}
                className="w-full py-3 px-4 border border-gray-200 rounded-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
