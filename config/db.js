const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@lightmeup.fmol2.mongodb.net/LMU",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("failed to connect to MongoDB", err));
