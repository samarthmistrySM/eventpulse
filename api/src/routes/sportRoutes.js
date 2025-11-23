import express from 'express';
import sportController from '../controllers/sportController.js';

const router = express.Router();

router.get("/", sportController.getSports);
router.get("/:slug", sportController.getSportBySlug);
router.post('/create', sportController.createSport);


export default router;
