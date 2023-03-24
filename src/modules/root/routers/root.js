import Router from "express";
import { testController } from "../controllers/test.js";

const root = Router();

root.route("/").get(testController);

export default root;
