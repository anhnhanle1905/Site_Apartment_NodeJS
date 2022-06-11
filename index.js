import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/db/mongoose.js";
// const pool = require("./src/db/...");

const port = process.env.PORT || 3000;

//xu ly form-data
// const multer = require("multer");
// const upload = multer();

const app = express();
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());
import auth from "./src/routers/auth.routers.js";
import blog from "./src/routers/blog.routers.js";
import agents from "./src/routers/agent.routers.js";
import imageGallerys from "./src/routers/imageGallery.routers.js";
import sliders from "./src/routers/slider.routers.js";

// app.use("/example", MIDDLEWARE, example);
app.use("/auth", auth);
app.use("/blog", blog);
app.use("/agents", agents);
app.use("/imageGallery", imageGallerys);
app.use("/slider", sliders);

//db connect()
connectDB();
app.listen(port, () =>
  console.log(`Site apartment app listening on port ${port}!`)
);
