import {  userRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/user.routes';
import express from 'express';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;