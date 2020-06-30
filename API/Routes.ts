import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser, getUsers, updateUser } from "./controllers/UserController.ts";
import { addProduct } from "./controllers/ProductController.ts";
const router = new Router();

router.get("/api/v1/user", getUsers);
router.post("/api/v1/user", addUser);
router.post("/api/v1/user/:id", updateUser);
router.post("/api/v1/product", addProduct);



export default router;
