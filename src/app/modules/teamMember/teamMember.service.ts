import { prisma } from "../../shared/prisma";

const CreateTeamMemberIntoDB = async (teamId: string, payload: any) => {
  const result = prisma.teamMember.create({
    data: {
         ...payload, 
         teamId 
    },
  });
  
  return result
};

const GetTeamMembersFromDB = async (teamId: string) => {
   const result = prisma.teamMember.findMany({ 
    where: { 
        teamId
     }   
  });

  return result
};

const GetSingleTeamMember = async (memberId: string) => {
   const result = prisma.teamMember.findUniqueOrThrow({ 
        where: { 
            id: memberId
         }
    });

   return result
};

const UpdateTeamMember = async (memberId: string, payload: any) => {
  const result = prisma.teamMember.update({ 
        where: {
             id: memberId 
        }, 
        data: payload 
  });

  return result
};

const DeleteTeamMember = async (memberId: string) => {
  const result = prisma.teamMember.delete({ 
        where: {
             id: memberId
         }
   });

  return result
};

export const TeamMemberService = {
  CreateTeamMemberIntoDB,
  GetTeamMembersFromDB,
  GetSingleTeamMember,
  UpdateTeamMember,
  DeleteTeamMember,
};
