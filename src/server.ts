
import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/config";
import router from "./modules/routes/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.get("/", (req: Request, res: Response) => {
  res.send("I am bk");
});


async function server() {
  try {
    await mongoose.connect(config.database_url!);

    console.log(`server connected with mongodb`);


    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
// 6857fe8545c0e36f9766cf0c