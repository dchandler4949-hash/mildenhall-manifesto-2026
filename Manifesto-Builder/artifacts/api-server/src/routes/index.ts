import { Router, type IRouter } from "express";
import healthRouter from "./health";
import surveysRouter from "./surveys";
import imageMapsRouter from "./imagemaps";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(surveysRouter);
router.use(imageMapsRouter);
router.use("/contact", contactRouter);

export default router;
