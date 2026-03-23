import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello from backend");
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});

