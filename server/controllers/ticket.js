const express = require("express");
const app = express();
const router = express.Router();

router.get("/Ticket", (req, res) => {
  res.send("Here is a list of all the tickets");
});

app.use("/", router);

app.listen();
