import { Router } from "express";
import * as cartController from './cart.controller.js'
import { auth } from "../../middleware/auth.js";
import { endponts } from "./cart.endpoint.js";
import { asyncHandler } from "../../services/errorHandling.js";
const router=Router();
router.post('/',auth(endponts.create),asyncHandler(cartController.createCart));
router.patch('/removeItem',auth(endponts.delete),asyncHandler(cartController.removeItem));
router.patch('/clear',auth(endponts.clear),asyncHandler(cartController.clearCart));
router.get('/',auth(endponts.get),asyncHandler(cartController.getCart));
export default router;