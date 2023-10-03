const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));
const home = require("./routes/home");
const post = require("./routes/post");
const profile = require("./routes/profile");
const view = require("./routes/view");
const login = require("./routes/login");
const signup = require("./routes/signup");
app.use(home);
app.use(post);
app.use(profile);
app.use(view);
app.use(login);
app.use(signup);
app.listen(3000);
