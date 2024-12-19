const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.58kad.mongodb.net/reseau-social",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    }
  )
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("failed to connect to mongo db", err));
