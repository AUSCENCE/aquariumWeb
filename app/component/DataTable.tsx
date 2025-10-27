"use client";

import React, { useState, useMemo } from 'react';
import { Search, Edit2Icon, Trash, InfoIcon, NotebookTabs } from 'lucide-react'; 

// --- TYPESCRIPT INTERFACES ---

// Les champs sont marqués comme optionnels (?)
interface DataItem {
    id: number;
    name: string;
    job?: string; 
    favoriteColor?: string;
    telephone?: string;
    location?: string;
    [key: string]: any; // Permet l'accès dynamique aux clés (pour la recherche)
}

interface TableColumn {
    key: keyof DataItem | 'actions';
    header: string;
}

interface DataDisplayTableProps {
    data: DataItem[];
    columns: TableColumn[];
    itemsPerPage?: number;
}

// --- COMPOSANT PRINCIPAL ---

export default function DataDisplayTable({
    data,
    columns,
    itemsPerPage = 10,
}: DataDisplayTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    // -------------------------------------------------------------------
         // LOGIQUE DE FILTRAGE ET RECHERCHE (CORRIGÉE)
    // -------------------------------------------------------------------
    const filteredData = useMemo(() => {
        if (!searchTerm) return data;

        const lowerCaseSearch = searchTerm.toLowerCase();

        return data.filter(item => {
            // 1. Convertir l'objet en tableau de ses valeurs
            const itemValues = Object.values(item);

            // 2. Parcourir toutes les valeurs de l'objet Item pour la recherche
            return itemValues.some(value => {
                // S'assurer que la valeur existe et est une chaîne de caractères
                if (value !== null && typeof value !== 'undefined') {
                    // Convertir la valeur en chaîne et vérifier l'inclusion du terme
                    return String(value).toLowerCase().includes(lowerCaseSearch);
                }
                return false;
            });
        });
    }, [data, searchTerm]);
    
    // -------------------------------------------------------------------
        // LOGIQUE DE PAGINATION (INCHANGÉE)
    // -------------------------------------------------------------------
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // -------------------------------------------------------------------
        // RENDU JSX (AJUSTEMENTS MINEURS)
    // -------------------------------------------------------------------
    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                {/* --- CHAMP DE RECHERCHE --- */}
                <div className="flex justify-end mb-4">
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
                        <Search className="w-4 h-4 opacity-70" />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Rechercher dans toutes les colonnes..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // Réinitialiser à la première page
                            }}
                        />
                    </label>
                </div>
                
                {/* --- GRANDE TABLE (BUREAU) --- */}
                <div className="overflow-x-auto rounded-box border border-base-content/5 mb-3 bg-base-100 hidden md:block">
                    <table className="table">
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th key={col.key}>{col.header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr key={item.id}>
                                    {columns.map((col) => (
                                        <td key={col.key}>
                                            {col.key === 'actions' ? (
                                                <div className="flex items-center">
                                                    {/* Boutons d'action inchangés */}
                                                    <button className="btn btn-sm btn-neutral mx-1 tooltip" data-tip="Détails"><InfoIcon className="w-4 h-4" /></button>
                                                    <button className="btn btn-sm btn-primary mx-1 tooltip" data-tip="Éditer"><Edit2Icon className="w-4 h-4" /></button>
                                                    <button className="btn btn-sm btn-secondary mx-1 tooltip" data-tip="Supprimer"><Trash className="w-4 h-4" /></button>
                                                </div>
                                            ) : (
                                                // Afficher les données standard (utilise l'accès dynamique)
                                                // La conversion en String() est utile pour afficher les nombres/booleans
                                                String(item[col.key as keyof DataItem] ?? '') 
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {paginatedData.length === 0 && (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-4">
                                        {/* Afficher un message si la recherche ne donne rien */}
                                        {searchTerm ? `Aucun résultat trouvé pour "${searchTerm}".` : 'Aucune donnée trouvée.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* --- CARTES COMPACTES (MOBILE) --- */}
                <div className="flex flex-col md:hidden gap-3">
                    {paginatedData.map((item) => (
                        <div key={item.id} className="card bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-lg">{item.name}</h2>
                                <p className="text-sm">
                                    **Téléphone :** {item.telephone ?? 'N/A'}<br/>
                                    **Lieu :** {item.location ?? 'N/A'}
                                </p>
                                <div className="justify-end card-actions mt-2">
                                    <button className="btn btn-sm btn-neutral mx-1">
                                        <NotebookTabs className="w-4 h-4" /> Détails
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {paginatedData.length === 0 && (
                        <div className="text-center py-4 text-base-content/80">
                            Aucune donnée trouvée.
                        </div>
                    )}
                </div>

                {/* --- PAGINATION (COMMUN) --- */}
                {totalPages > 1 && (
                    <div className="join my-5 justify-center md:justify-end">
                        <button 
                            className="join-item btn btn-primary"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Précédent
                        </button>
                        
                        <button className="join-item btn btn-ghost">
                            Page {currentPage} / {totalPages}
                        </button>

                        <button 
                            className="join-item btn btn-primary"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Suivant
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}