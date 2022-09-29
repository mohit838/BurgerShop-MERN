import app from "./app.js";

// GET Method
app.get("/", (req, res) => {
  res.send("<h1>This Is BurgerShop.</h1>");
});

// Server listening PORT
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
