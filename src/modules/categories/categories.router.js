import { Router } from 'express';
import * as categoriesController from './categories.controller.js';
import fileUpload,{fileValidation} from '../../services/multer.js';
import subCategoryRouter from './../subcategory/subcategory.router.js'
import { auth } from '../../middleware/auth.js';
import { endPoint } from './category.endpont.js';
import { asyncHandler } from '../../services/errorHandling.js';
import {validation} from '../../middleware/validation.js';
import * as validators from './category.validation.js'
const router=Router();
router.use('/:id/subcategory',subCategoryRouter);
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).single('image'),
validation(validators.createCategory),asyncHandler(categoriesController.createCategory));
// router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).single('image'),asyncHandler(categoriesController.createCategory));
router.get('/',asyncHandler(categoriesController.getCategories));
router.get('/active',auth(endPoint.getActive),asyncHandler(categoriesController.getActiveCategory))
router.get('/:id',auth(endPoint.specific),validation(validators.getSpecificCategory),
asyncHandler(categoriesController.getSpecificCategory));
router.put('/:id',auth(endPoint.update),fileUpload(fileValidation.image).single('image'),
asyncHandler(categoriesController.updateCategory));
export default router;