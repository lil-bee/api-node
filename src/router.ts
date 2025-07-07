import { Router } from "express";
import { body } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";

const router = Router();

/** === PRODUCT === **/

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.post("/product", body("name").isString(), createProduct);
router.put("/product/:id", body("name").isString(), updateProduct);
router.delete("/product/:id", deleteProduct);

/** === UPDATE === **/

router.get("/update", (req, res) => {
  res.json({ message: "update" });
});

router.get("/update/:id", (req, res) => {});
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  (req, res) => {}
);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  (req, res) => {}
);
router.delete("/update/:id", (req, res) => {});

/** === UPDATE POINT === **/

router.get("/updatepoint", (req, res) => {
  res.json({ message: "updatepoint" });
});
router.get("/updatepoint/:id", (req, res) => {});
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);
router.delete("/updatepoint/:id", (req, res) => {});

export default router;
