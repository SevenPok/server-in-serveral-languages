import { Router } from "express";
const router: Router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello world from typescript server!</h1>");
});

export default router;
