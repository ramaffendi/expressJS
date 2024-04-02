import express from "express";
import url from "url";

const app = express();
const port = 3000;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get("/", (req, res) => {
  // res.send("Hi it's me!");
  res.sendFile("./src/Home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("About me!");
  res.sendFile("./src/Home2.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.send("Contact me!");
});

app.use("*", (req, res) => {
  res.status(404);
  // res.send("Halaman tidak ditemukan");
  res.sendFile("./src/404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
