
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    style: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, style, onClick }: ButtonProps) => {
    return (
        <button
            className={`w-full rounded-4xl text-center py-3 cursor-pointer ${style}`}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};

export default Button;
