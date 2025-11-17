import { UserController } from "./user.controller";
import express from "express"

const router = express.Router()


router.get(
    "/",    
    UserController.GetAllUsersFRomDB
)


router.get(
    "/:id",    
    UserController.GetSingleUsersFRomDB
)


router.post(
    "/",
    UserController.createUser
)

router.put(
    "/:id",   
    UserController.UpdateUserFRomDB
)


router.delete(
    "/:id",   
    UserController.DeleteUserFRomDB
)


export const userRoutes = router;
