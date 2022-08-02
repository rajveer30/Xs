const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//middlewares defined
app.use(bodyParser.json());
app.use(cors());

//My Routes
const authRoutes = require("./routes/auth");
const contact = require("./routes/contact");

//my routes
app.use("/api", authRoutes);
app.use("/api", contact);

//databse connection enstablished
mongoose
  .connect(
    "mongodb+srv://naman:54321@cluster0.6iwtm7m.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(() => console.log("Ooops FAIL TO MAKE A CONNECTION WITH DB....!!!"));

//starting server
const port = 8001;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
