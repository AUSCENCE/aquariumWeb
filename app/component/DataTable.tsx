"use client";

import React, { useState, useMemo } from 'react';
// Remplacez par vos imports d'icônes réels (ex: de 'lucide-react')
import { Search, Edit2Icon, Trash, InfoIcon, NotebookTabs } from 'lucide-react'; 

// --- TYPESCRIPT INTERFACES ---

// Définit la structure d'un élément de donnée
interface DataItem {
    id: number;
    name: string;
    job: string;
    favoriteColor: string;
    // Ajoutez d'autres champs si nécessaire
}

// Définit les props pour le composant
interface DataDisplayTableProps {
    data: DataItem[];
    // Vous pouvez rendre les colonnes dynamiques
    columns: { key: keyof DataItem | 'actions'; header: string }[];
    itemsPerPage?: number;
}

// --- COMPOSANT PRINCIPAL ---

export default function DataDisplayTable({
    data,
    columns,
    itemsPerPage = 10,
}: DataDisplayTableProps) {
    // États pour la pagination, la recherche et le filtrage
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    // Vous pouvez ajouter un état pour le filtrage si nécessaire (ex: filterByJob)

    // --- LOGIQUE DE FILTRAGE ET RECHERCHE ---
    const filteredData = useMemo(() => {
        if (!searchTerm) return data;

        const lowerCaseSearch = searchTerm.toLowerCase();

        return data.filter(item =>
            // Recherche par nom ou par job (vous pouvez étendre ceci)
            item.name.toLowerCase().includes(lowerCaseSearch) ||
            item.job.toLowerCase().includes(lowerCaseSearch)
        );
    }, [data, searchTerm]);

    // --- LOGIQUE DE PAGINATION ---
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Fonctions de navigation
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
 // ... suite du composant DataDisplayTable

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
                            placeholder="Rechercher..."
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
                        {/* Tête du tableau (Head) */}
                        <thead>
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index}>{col.header}</th>
                                ))}
                            </tr>
                        </thead>
                        {/* Corps du tableau (Body) */}
                        <tbody>
                            {paginatedData.map((item, index) => (
                                <tr key={item.id}>
                                    {columns.map((col) => (
                                        <td key={col.key}>
                                            {col.key === 'actions' ? (
                                                <div className="flex items-center">
                                                    {/* Exemple de boutons d'action */}
                                                    <button className="btn btn-sm btn-neutral mx-1 tooltip" data-tip="Détails">
                                                        <InfoIcon className="w-4 h-4" />
                                                    </button>
                                                    <button className="btn btn-sm btn-primary mx-1 tooltip" data-tip="Éditer">
                                                        <Edit2Icon className="w-4 h-4" />
                                                    </button>
                                                    <button className="btn btn-sm btn-secondary mx-1 tooltip" data-tip="Supprimer">
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                // Afficher les données standard
                                                item[col.key as keyof DataItem]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {paginatedData.length === 0 && (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-4">
                                        Aucune donnée trouvée.
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
                                    **Poste :** {item.job}<br/>
                                    **Couleur :** {item.favoriteColor}
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
                        
                        {/* Affichage simple de la page actuelle */}
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
