import { ButtonHTMLAttributes } from "react";

interface ButtonGradientProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const ButtonGradient = ({className, children, ...rest}: ButtonGradientProps) => {
    return (
        <button className={`flex items-center justify-center btn-border-gradient ${className}`} {...rest} >{children}</button>
    );
}