import app from "./app.js";
import { connectDB } from "./config/mongoDB.js";

// DB Connection Funciton Call
connectDB();

// GET Method
app.get("/", (req, res) => {
  res.send("<h1>This Is BurgerShop.</h1>");
});

// Server listening PORT
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
