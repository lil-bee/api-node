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

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
