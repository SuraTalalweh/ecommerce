import { Router } from "express";
import * as productsController from './products.controller.js';
import { auth } from "../../middleware/auth.js";
import { endPoint } from "./product.endpont.js";
import fileUpload,{fileValidation} from '../../services/multer.js'
import * as validator from './product.validation.js';
import { validation } from "../../middleware/validation.js";
const router=Router();
router.get('/',productsController.getProducts)
// router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).fields([
//     {name:'mainImage',maxCount:1},
//     {name:'subImages',maxCount:4},
// ]),validation(validator.createProduct),productsController.createProduct);
router.post('/',auth(endPoint.create),fileUpload(fileValidation.image).fields([
    {name:'mainImage',maxCount:1},
    {name:'subImages',maxCount:4},
]),productsController.createProduct);
router.get('/category/:categoryId',productsController.getProductWithCategory);
router.get('/:productId',productsController.getProduct);
export default router;