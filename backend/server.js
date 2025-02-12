const express = require("express");
const app = express();
// app.get("/", (req, res) => {
//   res.send("hello");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data recieved");
});
app.listen(3000);
