import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    style: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({ children, style, onClick, type = "button" }: ButtonProps) => {
    return (
        <button
            className={`w-full rounded-4xl text-center py-3 cursor-pointer ${style}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
