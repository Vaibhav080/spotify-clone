import {Router} from 'express';
import { createSong } from '../controller/admin.controller.js';
import { deleteSong } from '../controller/admin.controller.js';
import { createAlbum } from '../controller/admin.controller.js';
import { deleteAlbum } from '../controller/admin.controller.js';
import { checkAdmin } from '../controller/admin.controller.js';
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

//Slightly optimized clean code.

router.use(protectRoute,requireAdmin)
router.get("/check", checkAdmin);

router.post('/songs',  createSong);
router.delete('/songs/:id',  deleteSong);

router.post('/albums',  createAlbum);
router.delete('/albums',  deleteAlbum);

export default router;