"use server";

import prisma from "@/lib/prisma";
import { User } from "./utilisateur/type";




export const checkAndAddUser = async (email: string, name: string) => {
    if (!email) return;
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser && name) {
            await prisma.user.create({
                data: {
                    email,
                    name,
                    role: "USER",
                },
            });
        } else {
            console.log("User already exists");
        }
    } catch (error) {
        console.log("error for verification for user ", error);
    }
};

export const listUser = async ():Promise<User[]> => {
    try {
         
         const users : User[] = await prisma.user.findMany(); 
                 
         return users; 
        
    } catch (error) {

        console.error("Erreur lors de la récupération des utilisateurs:", error);
        throw new Error("Impossible de récupérer la liste des utilisateurs.");
    }
}
export const updateUser = async (
  
    userId: string,
    data: {
        name?: string;
        email?: string;
        role?: string;
    }
    
): Promise<User> => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                name: data.name,
                email: data.email,
                role: data.role,
            },
        });

       
        return updatedUser;

    } catch (error: any) {
        
        if (error.code === 'P2025') {
            console.warn(`Tentative de mise à jour d'un utilisateur non trouvé avec ID: ${userId}`);
            throw new Error(`L'utilisateur avec l'ID ${userId} n'existe pas.`);
        }
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
        throw new Error("Impossible de mettre l'utilisateur à jour. Veuillez contacter l'administrateur.");
    }
};