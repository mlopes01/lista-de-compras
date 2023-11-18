
import { ChangeEvent, ReactNode } from 'react'

interface InputProps {
    size?: number;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, size, type, placeholder, onChange }: InputProps) {
    return (
        <input className='input' value={value} height={size} type={type} placeholder={placeholder} onChange={onChange} />
    )
}