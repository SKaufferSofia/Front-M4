import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductId, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const checkProduct = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductId(Number(id));
    res.json(product);
  }
);
