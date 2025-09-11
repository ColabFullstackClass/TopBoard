
import React from "react";

interface InputProps {
    labelName: string;
    inputType: string;
    placeholder: string;
<<<<<<< HEAD
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

=======
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
>>>>>>> 9a77f304e4a1ed265ed47823feb106a6bfdc36bf
const Input = ({ labelName, inputType, placeholder, value, onChange }: InputProps) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor={labelName} className="w-full text-gray-500">
                {labelName}
            </label>
            <input
                type={inputType}
<<<<<<< HEAD
                name={labelName === 'Email Address' ? 'email' : labelName === 'Password' ? 'password' : ''}
                className="w-full py-3 px-4 border border-gray-100 rounded-4xl bg-gray-50 "
                placeholder={placeholder}
                value={value}
                onChange={onChange}
=======
                className="w-full py-3 px-1 pl-6 pr-6 border bg-gray-200 border-gray-100 rounded-4xl"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
>>>>>>> 9a77f304e4a1ed265ed47823feb106a6bfdc36bf
            />
        </div>
    );
};

export default Input;
