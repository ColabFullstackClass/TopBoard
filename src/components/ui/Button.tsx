
import React from "react";

interface ButtonProps {
<<<<<<< HEAD
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
=======
  children: any;
  style: string;
  clickHandler?: () => void; //? makes it optional props
}

const Button = ({ children, style, clickHandler }: ButtonProps) => {
  return (
    <button
      className={`w-full rounded-4xl text-center py-3 transition-transform duration-300 hover:scale-110 cursor-pointer ${style}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
>>>>>>> 9a77f304e4a1ed265ed47823feb106a6bfdc36bf
};

export default Button;
