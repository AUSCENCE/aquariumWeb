import { Edit2Icon, InfoIcon, Trash } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface UserInfoProps {
  role: string;
  email: string | null;
  name: string | null;
}
const UserInfo: FC<UserInfoProps> = ({ role, email, name }) => {
  
  return (
    <div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
            <Image
              src={"/profile.jpg"}
              alt={"profile image"}
              height={500}
              width={500}
            />
          </div>
        </div>

        <div className="flex flex-col ml-4">
          <span className="text-xs text-gray-400">{role}</span>
          <span className="text-sm">{email || null}</span>
          <span className="text-sm italic font-bold">{name || null}</span>
        </div>
      </div>

      <div className="flex items-center justify-end pt-3">
        {/* Exemple de boutons d'action */}
        <button className="btn btn-sm btn-neutral mx-1 tooltip" data-tip="Détails">
          <InfoIcon className="w-4 h-4" />
        </button>
        <button className="btn btn-sm btn-primary mx-1 tooltip" data-tip="Éditer" onClick = {() => {
                        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
                        if (modal) {
                        modal.showModal();
                        }
                    }
                }>
          <Edit2Icon className="w-4 h-4" />
        </button>
        <button className="btn btn-sm btn-secondary mx-1 tooltip" data-tip="Supprimer">
          <Trash className="w-4 h-4" />
        </button>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Utilisateur</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default UserInfo;
