import React from "react";
import "./button.scss";

interface DynamicButtonProps {
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  text: string;
  onClick?: () => void;
  className?: string; 
}

const Button: React.FC<DynamicButtonProps> = ({
  backgroundColor = "background-color",
  textColor = "text-white",
  width = "button-width",
  text,
  onClick,
  className
}) => {
  return (
      <button
        onClick={onClick}
        className={`${backgroundColor} ${textColor} ${width} ${className} button-default px-4 rounded-lg flex items-center justify-center`}
      >
        {text}
      </button>
  );
};

export default Button;
