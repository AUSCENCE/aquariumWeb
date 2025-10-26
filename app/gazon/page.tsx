'use client';
import React, { useEffect, useMemo, useState } from 'react'
import Wrapper from '../component/Wrapper'
import { NotebookTabs } from 'lucide-react'
import { InputControl } from '../component/InputControl'
import { SelectControl } from '../component/SelectControl'
import { User } from '@clerk/nextjs/server'
import { listUser } from '../action';
import { SelectOption } from '../component/type';

const Gazon = () => {
    const [rawUsers, setRawUsers] = useState<User[] | null>(null);
    const [selectedClient, setSelectedClient] = useState<SelectOption | null>(null);
    const [selectedUser, setSelectedUser] = useState<SelectOption | null>(null);
    const fetchUsers = async () => {
        try {
            const usersList = await listUser(); // listUser() retourne User[]
            setRawUsers(usersList);
        } catch (e) {
            console.error("Erreur de chargement des utilisateurs:", e);
        } finally {
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const clientOptions: SelectOption[] = useMemo(() => {
        if (!rawUsers) return [];
        
        return rawUsers.map(user => ({
            label: user.name, 
            value: user.id.toString(), 
        }));
    }, [rawUsers]);
  return (
    <Wrapper>
        <h2 className="font-bold text-2xl mb-2">Gazon des activités </h2>

        <div className='card bg-base-100 card-md shadow-sm my-4'>
            <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <InputControl label='Date de Début :' type="date" placeholder='' />
                    <InputControl label='Date de Fin :' type="date" placeholder='' />
                    <SelectControl
                        label="Clients"
                        placeholder="Sélectionner un client..."
                        options={clientOptions} 
                        value={selectedClient}
                        onChange={setSelectedClient}
                    />
                    <SelectControl
                        label="Utilisateurs"
                        placeholder="Sélectionner un utilisateur..."
                        options={clientOptions} 
                        value={selectedUser}
                        onChange={setSelectedUser}
                    />
                </div> 
            </div>
        </div>

        <div className='card bg-base-100 card-md shadow-sm'>
          <div className="card-body ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="card bg-base-100 card-xs shadow-sm">
                   <div className='border-0 border-l-4 border-info rounded m-1'>
                        <div className='border-0 border-l-4 border-warning rounded m-1'>
                            <div className='border-0 border-l-4 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>  
                <div className="card bg-base-100 card-xs shadow-sm  border-4 border-success">
                   <div className='border-0 border-info rounded m-1'>
                        <div className='border-0  border-warning rounded m-1'>
                            <div className='border-0 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>  
                <div className="card bg-base-100 card-xs shadow-sm  border-4 border-success">
                   <div className='border-0 border-info rounded m-1'>
                        <div className='border-0  border-warning rounded m-1'>
                            <div className='border-0 border-error rounded m-1'>
                                    <div className="card-body">
                                        <h2 className="card-title"><u>Aquarium</u> : Jeans DE DIEU</h2>
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
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
                                        <p>
                                        A card component has a figure, a body part, and inside body
                                        there are title and actions parts
                                        </p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-sm btn-neutral  mx-1">
                                                <NotebookTabs className="w-4 h-4" /> Details
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>  

            </div>
           
          </div>
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