import express from "express";
import { TeamMemberController } from "./teamMember.controller";

const router = express.Router();

router.post(
    "/:teamId/members", 
    TeamMemberController.CreateTeamMember
);


router.get(
    "/:teamId/members", 
    TeamMemberController.GetTeamMembers
);


router.get(
    "/members/:memberId",
     TeamMemberController.GetSingleTeamMember
);


router.put(
    "/members/:memberId", 
    TeamMemberController.UpdateTeamMember
);


router.delete(
    "/members/:memberId", 
    TeamMemberController.DeleteTeamMember
);



export const teamMemberRoutes = router;
