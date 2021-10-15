const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const otherRoutes = require("./routes/other.routes");

require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const path = require("path");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/mail", otherRoutes);

//SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// server static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // set static folder
  //returning frontend for any route other than api
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/api", (req, res) => {
  res.send("API IS WORKING");
});

// jwt
app.get("*", checkUser);
app.get("/api/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});
