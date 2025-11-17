import { Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import httpStatus from 'http-status';

const GetAllUsersFRomDB = catchAsync(async (req: Request, res: Response) => {
    
    const result = await UserService.GetAllUsersFRomDB(req)

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Get Users successfully..!",
        data: result
    })

})

const GetSingleUsersFRomDB = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await UserService.GetSingleUsersFRomDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User info reteives successfully..!",
        data: result
    })

})


const UpdateUserFRomDB = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await UserService.UpdateUserFRomDB(id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User updated successfully..!",
        data: result
    })

})


const DeleteUserFRomDB = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params;

    const result = await UserService.DeleteUserFRomDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Deleted user successfully..!",
        data: result
    })

})


export const UserController = {
    GetAllUsersFRomDB,
    GetSingleUsersFRomDB,
    UpdateUserFRomDB,
    DeleteUserFRomDB
}