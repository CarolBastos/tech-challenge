import React from "react";
import "./button.scss";

interface DynamicButtonProps {
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<DynamicButtonProps> = ({
  backgroundColor = "background-color",
  textColor = "text-white",
  width = "button-width",
  text,
  onClick,
}) => {
  return (
      <button
        onClick={onClick}
        className={`${backgroundColor} ${textColor} ${width} py-4 px-4 rounded-lg`}
      >
        {text}
      </button>
  );
};

export default Button;
