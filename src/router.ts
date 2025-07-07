import { Router } from "express";
import { body } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/** === PRODUCT === **/

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.post("/product", body("name").isString(), createProduct);
router.put("/product/:id", body("name").isString(), updateProduct);
router.delete("/product/:id", deleteProduct);

/** === UPDATE === **/

router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
);
router.delete("/update/:id", deleteUpdate);

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
