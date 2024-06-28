import { Router } from "express";
import { checkProduct, getProducts } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:id", checkProduct);

export default router;
