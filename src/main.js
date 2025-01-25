import express from "express";

const web = express();

web.listen(3000, () => {
  console.log("Server is running on port 3000");
});
