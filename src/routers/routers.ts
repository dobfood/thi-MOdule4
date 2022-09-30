import express from "express";
import employController from "../controller/employController";
import multer from "multer";

const upload = multer()
const router = express.Router()

router.get('/', employController.show)
router.get('/create', employController.getAdd)
router.post('/create', upload.none(), employController.postAdd)
router.get('/delete/:id', employController.delete)
router.get('/update/:id', employController.getUpdate)
router.get('/update', employController.getUpdate)
router.get('/detail/:id', employController.Detail)
export default router


