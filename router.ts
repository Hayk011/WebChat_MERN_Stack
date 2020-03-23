import {Router, Response, Request} from "express";

const router = Router();
router.get("/", (request: Request, response: Response) => {
    response.send("Hello");
});
export default router;