// components/InputControl.tsx
import React, { InputHTMLAttributes } from 'react';

// Étend les props HTML standard et ajoute les props spécifiques
interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    // La gestion de l'état se fait via les props value et onChange de base
}

export const InputControl: React.FC<InputControlProps> = ({
    label,
    placeholder='',
    className = '',
    ...rest
}) => {
    return (
        <label className="form-control w-full">
            {label && <div className="label"><span className="label-text">{label}</span></div>}
            <input
                type={rest.type || 'text'} // Utilise le type passé ou 'text' par défaut
                placeholder={placeholder}
                className={`input input-bordered w-full ${className}`}
                {...rest} // Passe value, onChange, required, etc.
            />
        </label>
    );
};