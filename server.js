require("dotenv").config()
require("./services/mongo_connector")

const express = require("express");
const app = express();
const cors = require('cors')
const helmet = require('helmet');
const port = process.env.PORT || 3005;

const zoneRouter = require("./routes/zone");

app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use(helmet());

app.use("/zone", zoneRouter);

app.get("/", (req, res) => {
    res.status(200).json("Working!");
});

app.listen(port, "0.0.0.0", () => console.log("Server started on port: " + port));
