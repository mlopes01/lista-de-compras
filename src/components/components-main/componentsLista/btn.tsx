import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react'

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children?: ReactNode;
}

export function Btn({ children, ...rest }: BtnProps) {
    return (
        <button className='btn'{...rest}>{children}</button>
    )
}