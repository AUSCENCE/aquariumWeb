// components/TextareaControl.tsx
import React, { TextareaHTMLAttributes } from 'react';

interface TextareaControlProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    placeholder: string;
}

export const TextareaControl: React.FC<TextareaControlProps> = ({
    label,
    placeholder,
    className = '',
    ...rest
}) => {
    return (
        <label className="form-control w-full">
            {label && <div className="label"><span className="label-text">{label}</span></div>}
            <textarea
                placeholder={placeholder}
                className={`textarea textarea-bordered w-full h-24 ${className}`} 
                {...rest}
            ></textarea>
        </label>
    );
};