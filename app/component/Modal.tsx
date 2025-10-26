import { PlusCircle } from 'lucide-react';
import React from 'react'
type ModalProps = {
    children: React.ReactNode;
}

const Modal = ({children}:ModalProps) => {
  return (
   <div>
    
            <button 
                className="btn btn-primary btn-sm mb-2"
                onClick = {() => {
                        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
                        if (modal) {
                        modal.showModal();
                        }
                    }
                }
            >
                <PlusCircle className='w-4 h-4'/>
                Ajouter 
            </button>            

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {children}
                </div>
            </dialog>
   </div>

   
  )
}

export default Modal