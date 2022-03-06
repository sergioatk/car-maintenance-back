const configApp = require("./config");
configApp();
const app = require("express")();
const PORT = process.env.PORT | 8080;
const carRoutes = require("./routes/cars");

app.use(cors());

app.get("/", (req, res) => {
  console.log("en ghome");
});
app.use("/cars", carRoutes);

app.use((req, res) => {
  res.status(404).json({ error: true, message: "not found" });
});

app.listen(PORT, console.log(`app listening on port ${PORT}`));
