import { Router } from 'express';
import * as orderController from './order.controller.js';
import {validation} from '../../middleware/validation.js';
import { auth } from '../../middleware/auth.js';
import { endponts } from '../order/order.endpoint.js';
const router=Router();
router.post('/',auth(endponts.create),orderController.createOrder);
export default router;