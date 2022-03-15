var cookieParser = require("cookie-parser");
// const pool = require("./src/db/...");

const port = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");

//xu ly form-data
// const multer = require("multer");
// const upload = multer();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());

const example = require("./src/routers/example.js");

app.use("/", example);
//db connect()
app.listen(port, () => console.log(`Apartment app listening on port ${port}!`));
