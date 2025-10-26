// components/Select2Control.tsx
import React, { useCallback, useEffect, useMemo } from 'react';
import Select, { ActionMeta, SingleValue, StylesConfig } from 'react-select';
import { SelectOption } from './type';

// Définition des props
interface SelectControlProps {
    label?: string;
    options: SelectOption[];
    placeholder: string;
    value: SelectOption | null; // La valeur sélectionnée doit être de type SelectOption ou null
    onChange: (value: SelectOption | null) => void;
    required?: boolean;
    className?: string;
}

// Styles personnalisés pour mieux s'intégrer à DaisyUI
const customStyles: StylesConfig<SelectOption, false> = {
    control: (provided, state) => ({
        ...provided,
        // Ces styles imitent la classe 'select-bordered' de DaisyUI
        borderWidth: '1px',
        borderColor: state.isFocused ? 'hsl(var(--bc) / 0.1)' :  'hsl(var(--p))', // Couleur primaire ou bordure
        //minHeight: '3rem', // Hauteur d'input standard
        // ... autres styles ...
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'hsl(var(--bc))', 
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'hsl(var(--bc) / 0.5)', // Couleur du placeholder
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 20, // Assure que le menu s'affiche par-dessus la modale/carte
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    }),
};

export const SelectControl: React.FC<SelectControlProps> = ({
    label,
    options,
    placeholder,
    value,
    onChange,
    required = false,
    className = '',
}) => {
    // Adapter le changement de valeur de React Select à votre fonction onChange
    const handleChange = useCallback((
        newValue: SingleValue<SelectOption>,
        actionMeta: ActionMeta<SelectOption>
    ) => {
        onChange(newValue as SelectOption | null);
    }, [onChange]);
    
    // Pour que le champ soit considéré comme 'requis' lors de la soumission du formulaire
    const selectRef = React.useRef<any>(null);
    useEffect(() => {
        if (required && selectRef.current && !value) {
            selectRef.current.setState({ value: null });
        }
    }, [required, value]);


    return (
        <label className={`form-control w-full  border border-none ${className}`}>
            {label && <div className="label"><span className="label-text font-medium">{label}</span></div>}
            <Select className='border border-none'
                ref={selectRef}
                value={value}
                onChange={handleChange}
                options={options}
                placeholder={placeholder}
                styles={customStyles}
                isClearable={true} // Permet de vider la sélection
                isSearchable={true} // Activer la barre de recherche (le cœur du Select2)
                getOptionLabel={(option) => option.label} // Utiliser 'label' pour l'affichage
                getOptionValue={(option) => option.value} // Utiliser 'value' pour la valeur
                required={required}
            />
        </label>
    );
};