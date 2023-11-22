const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://popyk:Q45vxzwE74NqiGB5@main-cluster.5xeucop.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
