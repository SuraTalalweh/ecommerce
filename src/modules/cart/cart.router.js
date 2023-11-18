import { Router } from "express";
import * as cartController from './cart.controller.js'
import { auth } from "../../middleware/auth.js";
import { endponts } from "./cart.endpoint.js";
const router=Router();
router.post('/',auth(endponts.create),cartController.createCart);
router.patch('/removeItem',auth(endponts.delete),cartController.removeItem);
router.patch('/clear',auth(endponts.clear),cartController.clearCart);
router.get('/',auth(endponts.get),cartController.getCart);
export default router;