
import { ChangeEvent, ReactNode } from 'react'

interface InputProps {
    className?: string;
    height?: number;
    size?: number;
    value?: string | number | boolean | any;
    type?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}

export function Input({ height, className, value, size, type, placeholder, onChange }: InputProps) {
    return (
        <input height={height} className={className} value={value} size={size} type={type} placeholder={placeholder} onChange={onChange} />
    )
}