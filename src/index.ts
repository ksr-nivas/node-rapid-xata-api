import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/api/jobs", (req: Request, res: Response) => {
    res.json({msg: "Hello"})
})

app.listen(port, () => {
    console.log(`Server runnin at port ${port}`);
})