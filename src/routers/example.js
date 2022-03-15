const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  //const data = await getToken();
  console.log("oke");
  res.json({ status: 200, message: "oke" });
});

module.exports = router;
