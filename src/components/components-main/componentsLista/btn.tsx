import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
} 

export function Btn({ className, children, ...rest }: BtnProps) {
    return (
        <button className={className}{...rest}>{children}</button>
    )
}