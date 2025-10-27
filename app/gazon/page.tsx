'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Wrapper from '../component/Wrapper';
import { NotebookTabs } from 'lucide-react';
import { InputControl } from '../component/InputControl';
// Utilisez l'approche de React Select pour SelectControl si vous voulez la recherche
import { SelectControl } from '../component/SelectControl'; 
// import { User as ClerkUser } from '@clerk/nextjs/server'; // Renommer l'import Clerk si besoin

import { listUser } from '../action';
import { SelectOption } from '../component/type'; // Assurez-vous que SelectOption est correct

// 🚨 CORRECTION CLÉ : Définir ou importer le type User CORRECT
// Supposons que votre type User (qui vient de Prisma/votre action) ressemble à ceci :
interface AppUser { 
    id: string; // Utilisé pour le value du select
    name: string; // Utilisé pour le label du select
    // Ajoutez ici tous les autres champs que listUser retourne
    email?: string; 
    role?: string;
}

const Gazon = () => {
    // 🚨 CORRECTION : Utiliser le type AppUser défini ou importé de la source correcte
    const [rawUsers, setRawUsers] = useState<AppUser[] | null>(null);
    const [selectedClient, setSelectedClient] = useState<SelectOption | null>(null);
    const [selectedUser, setSelectedUser] = useState<SelectOption | null>(null);

    const fetchUsers = async () => {
        try {
            // listUser() doit retourner Promise<AppUser[]>
            const usersList: AppUser[] = await listUser(); 
            setRawUsers(usersList); // Cette ligne fonctionne maintenant avec le bon type
        } catch (e) {
            console.error("Erreur de chargement des utilisateurs:", e);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const userOptions: SelectOption[] = useMemo(() => {
        if (!rawUsers) return [];
        
        // S'assurer que 'id' est une string pour SelectOption
        return rawUsers.map(user => ({
            label: user.name, 
            value: String(user.id), 
        }));
    }, [rawUsers]);

  return (
    <Wrapper>
        <h2 className="font-bold text-2xl mb-2">Gazon des activités </h2>

        {/* --- FILTRES DE RECHERCHE --- */}
        <div className='card bg-base-100 card-md shadow-sm my-4'>
            <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <InputControl label='Date de Début :' type="date" placeholder='' />
                    <InputControl label='Date de Fin :' type="date" placeholder='' />
                    
                    {/* Les options pour les clients et les utilisateurs sont maintenant 'userOptions' */}
                    <SelectControl
                        label="Clients"
                        placeholder="Sélectionner un client..."
                        options={userOptions} // Utilisation de userOptions
                        value={selectedClient}
                        onChange={setSelectedClient}
                    />
                    <SelectControl
                        label="Utilisateurs"
                        placeholder="Sélectionner un utilisateur..."
                        options={userOptions} // Utilisation de userOptions
                        value={selectedUser}
                        onChange={setSelectedUser}
                    />
                </div> 
            </div>
        </div>

        {/* --- AFFICHAGE DES ACTIVITÉS --- */}
        <div className='card bg-base-100 card-md shadow-sm'>
          <div className="card-body ">
            {/* ... Le JSX des cartes reste inchangé ... */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Répétition des cartes (à remplacer par un .map) */}
                {/* Je conserve seulement un exemplaire pour la clarté */}
                <div className="card bg-base-100 card-xs shadow-sm border-4 border-success">
                   <div className='border-0 border-info rounded m-1'>
                        <div className='border-0 border-warning rounded m-1'>
                            <div className='border-0 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0  border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0  border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>Description de l'activité...</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Détails
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* ... (Autres cartes à supprimer/mapper) ... */}
            </div>
           
          </div>
          {/* Pagination */}
          <div className="card-actions justify-center my-3  hidden md:flex">
            <div className="join justify-center mt-1">
              <button className="join-item btn btn-primary">«</button>
              <button className="join-item btn btn-ghost">Page 22</button>
              <button className="join-item btn btn-primary">»</button>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Gazon