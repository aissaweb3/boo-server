const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("test");
});

app.get("/upload", (req: any, res: any) => {
  res.send("upload test");
});

app.listen(3001, () => {
  console.log("running on 3001");
});
