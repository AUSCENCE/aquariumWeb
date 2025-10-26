'use client';
import React from 'react'
import Wrapper from '../component/Wrapper'
import DataDisplayTable from '../component/DataTable'
import Modal from '../component/Modal'
import { InputControl } from '../component/InputControl';
import { TextareaControl } from '../component/TextareaControl';

// Données de démonstration
const MOCK_DATA = [
  {
    id: 1,
    name: "Cy Ganderton",
    telephone: "Quality Control Specialist",
    location: "Bleu",
  },
  {
    id: 2,
    name: "Hart Hagerty",
    telephone: "Desktop Support Technician",
    location: "Rouge",
  },
  { id: 3, name: "Brice Swyre", job: "Tax Accountant", favoriteColor: "Vert" },
  {
    id: 4,
    name: "Marigold The Second",
    telephone: "Designer",
    location: "Jaune",
  },
  // Ajoutez plus d'éléments pour tester la pagination
];

// Définition des colonnes
const COLUMNS_CONFIG = [
  { key: "name" as const, header: "Nom" },
  { key: "telephone" as const, header: "Télephone" },
  { key: "location" as const, header: "Localisation" },
  { key: "actions" as const, header: "Actions" },
];
const Client = () => {
  return (
     <Wrapper>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 ">
        <h2 className="font-bold text-2xl mb-2">Gestion des Clients </h2>
        <Modal>
          <h4 className="text-sm font-bold mb-3">Nouveau Client </h4>
          <form action="" className="flex flex-col gap-3">
           <InputControl  label="Nom & Prénoms" placeholder="Entrez le nom et prenom du client"    />
           <InputControl  label="Téléphone" placeholder="Entrez le téléphone du client"    />
           <TextareaControl label="Desciption" placeholder="Desciption de l'installation effectué" />
          
            <div className="flex justify-center md:justify-end ">
              <button className="btn btn-primary w-full md:w-auto ">
                Ajouter
              </button>
            </div>
          </form>
        </Modal>
      </div>

      <DataDisplayTable
        data={MOCK_DATA}
        columns={COLUMNS_CONFIG}
        itemsPerPage={3} // 3 éléments par page pour la démo
      />
    </Wrapper>
  )
}

export default Client