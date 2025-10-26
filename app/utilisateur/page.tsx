'use client';
import React, { useEffect, useState } from 'react'
import Wrapper from '../component/Wrapper'
import { toast } from 'react-toastify';
import { listUser } from '../action';
import { User } from './type';
import UserInfo from '../component/userInfo';

const Utilisateur = () => {
  const [users, setUsers] = useState<User[] | null>(null);


  const fetchUsers = async () =>{
     try {
          const allUsers =  await listUser();
          setUsers(allUsers);
          console.log("Données chargées :", allUsers)
          console.log("Données USERS :", users)

     } catch (error) {
       toast.error("Erreur lors du chargement des clients.");
     }
  }

  useEffect(()=>{
      fetchUsers();
  },[])

  return (
    <Wrapper>
        
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 ">
        <h2 className="font-bold text-2xl mb-2">Gestion des Utilisateurs </h2>        
      </div>    

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
        

        {users?.map((user, index) => (
          <div className="card bg-base-100 shadow-sm p-3">
            <UserInfo
                key={user.id || index} // Use user.id if available, much better for keys
                name={user.name}
                email={user.email}
                role={user.role}
            />
          </div>

        ))}
      </div>
    </Wrapper>
  )
}

export default Utilisateur