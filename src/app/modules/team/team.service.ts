import { prisma } from "../../shared/prisma";

const CreateTeamIntoDB = async (payload: any) => {
  const result = prisma.team.create({ 
     data: payload
   });

  return result
};

const GetAllTeamsFromDB = async () => {
  const result = prisma.team.findMany({});

  return result
};

const GetSingleTeamFromDB = async (id: string) => {
  const result = prisma.team.findUniqueOrThrow({ 
     where: { 
        id
      }
  });

  return result
};



const UpdateTeamIntoDB = async (id: string, payload: any) => {
  const result = prisma.team.update({ 
        where: { 
            id
         }, 
        data: payload
   });

  return result
};



const DeleteTeamFromDB = async (id: string) => {
  const result = prisma.team.delete({ 
        where: { 
            id
         }
   });

  return result
};

export const TeamService = {
  CreateTeamIntoDB,
  GetAllTeamsFromDB,
  GetSingleTeamFromDB,
  UpdateTeamIntoDB,
  DeleteTeamFromDB,
};
