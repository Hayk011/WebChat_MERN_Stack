import {Router, Response, Request} from "express";

const router = Router();
router.get("/", (request: Request, response: Response) => {
    response.status(200).json({message: "Server is up and runing"}).end();
});
export default router;