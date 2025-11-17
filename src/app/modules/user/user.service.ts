import { Request } from "express";
import { prisma } from "../../shared/prisma";
import bcrypt from "bcryptjs";

import { createUserInput } from "./user.interface";
import {Prisma } from "../../../generated/client";

const createUser = async (payload: createUserInput) => {

    console.log(payload);

    const hashedPass = await bcrypt.hash(payload.password, 10)

   const result = await prisma.user.create({
            data: {
                name: payload.name,
                email: payload.email,
                password: hashedPass
            }
        });
    return result
}


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
    createUser,
    GetAllUsersFRomDB,
    GetSingleUsersFRomDB,
    UpdateUserFRomDB,
    DeleteUserFRomDB
}