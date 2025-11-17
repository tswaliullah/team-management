import { createUserInput } from "../user/user.interface";
import { jwtHelperes } from "../../helper/jwtHelper";
import { prisma } from "../../shared/prisma"
import { Secret } from 'jsonwebtoken';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import bcrypt from 'bcryptjs';
import config from "../../../config";

const register = async (payload: createUserInput) => {

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





const login = async (payload: { email: string, password: string }) => {

    const user = await prisma.user.findFirstOrThrow({
        where: {
            email: payload.email
        }
    })

    const checkPassword = await bcrypt.compare(payload.password, user.password)

    if (!checkPassword) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Password not matched")
    }

    const accessToken = jwtHelperes.generateToken({ email: user.email }, config.access_token_secret as string, "1h")

    const refreshToken = jwtHelperes.generateToken({ email: user.email }, config.refresh_token_secret as string, "90d")

    return {
        accessToken,
        refreshToken
    }
}


const refreshToken = async(token: string) => {

    let decodedData;
    try{
        decodedData = jwtHelperes.verifyToken(token, config.refresh_token_secret as Secret)
    }catch (err) {
        throw new Error("You are not authorized!")
    }

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: decodedData.email
        }
    });

    const accessToken = jwtHelperes.generateToken({
        email: userData.email,
    },
    config.jwt_secret as Secret,
    config.jwt_expire_in as string
);

return {
        accessToken
    }   
}


const getMe = async(session: any) => {
    const accessToken = session.accessToken;
    const decodedData = jwtHelperes.verifyToken(accessToken, config.access_token_secret as Secret);

    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: decodedData.email,
        }
    })

    const {id, email} = userData;

    return {
        id,
        email
    }
}

export const AuthService = {
    register,
    login,
    refreshToken,
    getMe
}