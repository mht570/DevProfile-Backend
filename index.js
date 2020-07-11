const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/mongoKey");
const userRoute = require("./Routes/user");
const passport = require("passport");
const port = process.env.PORT || 4000;

connectDB();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute);
app.use(passport.initialize());

require("./config/passport")(passport);
app.listen(port, () => {
  console.log("server is running at " + port);
});
