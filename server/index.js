require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const session = require("express-session");
routes = require("./routes/routes");
const app = express();

const port = process.env.port || 3001;
app.use(cors());
app.use(json());
routes(app);
app.use(require("body-parser").text());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000
    }
  })
);
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("connected");
});
app.listen(port, () => {
  console.log(`ecommerce app is listening on port {port}`);
});
