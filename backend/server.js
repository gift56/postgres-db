import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log("🚀 ~ PORT:", PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); // log the request made on development

app.get("/", (req, res) => {
  console.log(res.getHeaders());
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("App Listening on port " + PORT);
});
