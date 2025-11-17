import { TeamController } from "./team.controller";
import express from "express";



const router = express.Router();

router.post(
    "/", 
    TeamController.CreateTeam
);


router.get(
    "/", 
    TeamController.GetAllTeams
);


router.get(
    "/:id", 
    TeamController.GetSingleTeam
);


router.put(
    "/:id", 
    TeamController.UpdateTeam
);


router.delete(
    "/:id",
    TeamController.DeleteTeam
);



export const teamRoutes = router;
