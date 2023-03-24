import Router from "express";
import root from "./routers/root.js";

const rootRouter = Router();

rootRouter.use(root);

export default rootRouter;
