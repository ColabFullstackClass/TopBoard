
import React from "react";

interface InputProps {
    labelName: string;
    inputType: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ labelName, inputType, placeholder, value, onChange }: InputProps) => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <label htmlFor={labelName} className="w-full text-gray-500">
                {labelName}
            </label>
            <input
                type={inputType}
                name={labelName === 'Email Address' ? 'email' : labelName === 'Password' ? 'password' : ''}
                className="w-full py-3 px-4 border border-gray-100 rounded-4xl bg-gray-50 "
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
