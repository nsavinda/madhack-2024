import express,{ Express , Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../src/Routes/auth";
dotenv.config();

const URL = process.env.MONGO || "";

const app: Express = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

// app.post("/api/register", (req: Request, res: Response) => {
//     let response = {
//         success: true,
//         message: "Registered hee hee"
//     };
//     console.log(response);
//     res.send(response);
// });

app.use("/api/register", authRoute);

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://udeeshaprabhashana123:Udeesha1234@cluster0.rg8crrl.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connect to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})

app.listen(4011, () => {
    connect();
    console.log("Server running on port 4011");
});