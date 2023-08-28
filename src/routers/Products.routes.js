import express from "express";

import {
  getProducts,
  postProduct,
  deleteProduct,
  getProduct,
} from "../controller/products.controller.js";

const { Router } = express;
const router = Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProduct);
router.route("/").post(postProduct);
router.route("/:id").delete(deleteProduct);

export default router;
