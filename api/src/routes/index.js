import express from 'express';
import sportRoutes from "./sportRoutes.js"

const router = express.Router();

export const routes = () => {
    router.use('/sports', /* #swagger.tags = ['Sport'] */ sportRoutes);

    return router;
}

export default routes;
