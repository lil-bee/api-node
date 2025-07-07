import express from "express";
import { createNewUser, signin } from "./handlers/user";
import { protect } from "./modules/auth";
import router from "./router";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
