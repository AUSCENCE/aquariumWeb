"use client";
import React, { useState } from "react";
import Wrapper from "../component/Wrapper";
import Modal from "../component/Modal";
;
import DataDisplayTable from "../component/DataTable";
import { SelectOption } from "../component/type";
import { SelectControl } from "../component/SelectControl";
// Données de démonstration
// Composant parent du formulaire (où vous gérez l'état)
const MOCK_CLIENTS: SelectOption[] = [
    { label: 'Crimson Corporation', value: 'client_crimson' },
    { label: 'Amber Solutions', value: 'client_amber' },
    { label: 'Velvet Innovations', value: 'client_velvet' },
];
const MOCK_DATA = [
  {
    id: 1,
    name: "Cy Ganderton",
    job: "Quality Control Specialist",
    favoriteColor: "Bleu",
  },
  {
    id: 2,
    name: "Hart Hagerty",
    job: "Desktop Support Technician",
    favoriteColor: "Rouge",
  },
  { id: 3, name: "Brice Swyre", job: "Tax Accountant", favoriteColor: "Vert" },
  {
    id: 4,
    name: "Marigold The Second",
    job: "Designer",
    favoriteColor: "Jaune",
  },
  // Ajoutez plus d'éléments pour tester la pagination
];

// Définition des colonnes
const COLUMNS_CONFIG = [
  { key: "name" as const, header: "Nom" },
  { key: "job" as const, header: "Poste" },
  { key: "favoriteColor" as const, header: "Couleur" },
  { key: "actions" as const, header: "Actions" },
];
const Task = () => {

  const [selectedClient, setSelectedClient] = useState<SelectOption | null>(null);
 
  return (
    <Wrapper>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 ">
        <h2 className="font-bold text-2xl mb-2">Gestion des Activités </h2>
        <Modal>
          <h4 className="text-sm font-bold mb-3">Nouvelle Tâche </h4>
          <form action="" className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Titre de la tâche"
              className="input w-full "
            />
            <textarea
              className="textarea w-full"
              placeholder="Description de la tâche"
            ></textarea>
            <input
              type="number"
              placeholder="coût estimé de la tâche"
              className="input w-full "
            />
            <SelectControl
                label="Client Responsable"
                placeholder="Rechercher et sélectionner un client..."
                options={MOCK_CLIENTS}
                value={selectedClient}
                onChange={setSelectedClient} // Mettre à jour l'état sélectionné
                required
            />
            <div className="flex justify-center md:justify-end ">
              <button className="btn btn-primary w-full md:w-auto ">
                Ajouter la Tâche
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
  );
};

export default Task;
