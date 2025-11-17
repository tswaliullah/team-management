import { Request, Response } from "express";
import { AuthService } from "./user.service";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import httpStatus  from 'http-status';






const register = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.register(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User created successfully..!",
        data: result
    })

})







const login = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.login(req.body)

    const {accessToken, refreshToken} = result

    res.cookie("accessToken", accessToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60
    })

    res.cookie("refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 90
    })

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User login successfully..!",
        data: {
            accessToken,
            refreshToken
        }
    })

})



const getMe = catchAsync(async (req: Request, res: Response) => {

    const userSession = req.cookies;
    const result = await AuthService.getMe(userSession)



    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User retrive successfully..!",
        data: result
    })

})



export const AuthController = {
    register,
    login,
    getMe
}