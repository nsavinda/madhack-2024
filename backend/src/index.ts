import express,{ Express , Request, Response} from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("MADHACK API is running");
});

app.listen(4011, () => {
    console.log("Server running on port 4011");
});