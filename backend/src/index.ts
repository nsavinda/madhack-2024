import express,{ Express , Request, Response} from "express";
import cors from "cors";

const app: Express = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

app.post("/api/register", (req: Request, res: Response) => {
    let response = {
        success: true,
        message: "Registered hee hee"
    };
    console.log(response);
    res.send(response);
});

app.listen(4011, () => {
    console.log("Server running on port 4011");
});