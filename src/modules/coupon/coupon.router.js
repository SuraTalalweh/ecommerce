import { Router } from "express";
import * as couponController from './coupon.controller.js';
const router=Router();
router.post('/',couponController.createCoupon);
router.get('/',couponController.getCoupons);
router.put('/:id',couponController.updateCoupon);
router.patch('/softDelete/:id',couponController.softDelet);
router.delete('/hardDelete/:id',couponController.hardDelet);
router.patch('/restore/:id',couponController.restore)
export default router;