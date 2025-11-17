import { prisma } from "../../shared/prisma";
import { createUserInput } from "./user.interface";



const GetAllUsersFRomDB = async (payload: any) => {

    console.log(payload);

   const result = await prisma.user.findMany({});


    return result
}


const GetSingleUsersFRomDB = async (id: string) => {

    console.log(id);

   const result = await prisma.user.findUniqueOrThrow({
        where: {
                id
            }
        })

    return result
}

const UpdateUserFRomDB = async (id: string, payload: Partial<createUserInput>) => {

    console.log(payload);

   const result = await prisma.user.update({
    where: {
        id
    },
    data: payload
   })


    return result
}



const DeleteUserFRomDB = async (id: string) => {

    console.log(id);

   const result = await prisma.user.delete({
    where: {
        id
    }
   })

    return result
}





export const UserService = {
    GetAllUsersFRomDB,
    GetSingleUsersFRomDB,
    UpdateUserFRomDB,
    DeleteUserFRomDB
}