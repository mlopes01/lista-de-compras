import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children?: ReactNode;
}

//interface BtnProps {
//   type: "button" | "submit" | "reset" | undefined;
//   children: ReactNode;
//}

export function Btn({ children, ...rest }: BtnProps) {
    return (
        <button {...rest}>{children}</button>
    )
}