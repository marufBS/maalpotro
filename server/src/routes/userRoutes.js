import express from 'express';
import * as controllers from '../controllers/userController.js'
import multer from 'multer';
const router = express.Router();

// const upload = multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: 20 * 1024 * 1024 }  // 20 MB max
// });

// const uploadFields = [
//     { name: 'nidFront', maxCount: 1 },
//     { name: 'nidBack', maxCount: 1 },
//     { name: 'tradeLicense', maxCount: 1 }
// ]


router.post('/create', controllers.createUserController);

export default router;
