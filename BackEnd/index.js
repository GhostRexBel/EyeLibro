const express = require("express");
const cors = require("cors");

const app = express();
const port = 4400;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: "application/json",
  })
);

app.use(cors());

// http://localhost:3000/transaction
app.get("/transaction", (req, res) => {
  res.send("se realizo un get");
});

// http://localhost:3000/transaction
app.post("/transaction", (req, res) => {
  res.send("se realizo un post");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
