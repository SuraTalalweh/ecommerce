import { Router } from 'express';
import * as categoriesController from './categories.controller.js';
import fileUpload,{fileValidation} from '../../services/multer.js';
import subCategoryRouter from './../subcategory/subcategory.router.js'
import { auth } from '../../middleware/auth.js';
import { endPoint } from './category.endpont.js';
const router=Router();
router.use('/:id/subcategory',subCategoryRouter);
router.get('/',categoriesController.getCategories);
router.get('/active',auth(endPoint.getActive),categoriesController.getActiveCategory)
router.get('/:id',auth(endPoint.specific),categoriesController.getSpecificCategory);
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).single('image'),categoriesController.createCategory);
router.put('/:id',auth(endPoint.update),fileUpload(fileValidation.image).single('image'),categoriesController.updateCategory);
export default router;