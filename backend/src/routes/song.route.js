import {Router} from 'express';
import { getAllSongs } from '../controller/song.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';
import { getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from '../controller/song.controller.js';

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/featured", getMadeForYouSongs);
router.get("/featured", getTrendingSongs);

export default router