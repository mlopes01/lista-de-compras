
import { ChangeEvent, ReactNode } from 'react'

interface InputProps {
    size?: number;
    value?: ReactNode
    children?: ReactNode;
    type?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ size, type, placeholder, onChange }: InputProps) {
    return (
        <input className='input' height={size} type={type} placeholder={placeholder} onChange={onChange} />
    )
}