import express, { Application} from "express";
const app: Application = express();
const PORT: string | number = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server started in port  ${PORT}`);
});