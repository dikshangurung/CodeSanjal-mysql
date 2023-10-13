const express = require("express");
const app = express();

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Views setup
app.set("view engine", "ejs");
app.set("views", "views");

// app.use(express.static(path.join(__dirname, "public")));
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//database
const db = require("./util/database");

//Routes import
const users = require("./routes/users");
const auth = require("./routes/auth");
const profile = require("./routes/profile");
const admin = require("./routes/admin");
const moderator = require("./routes/moderator");
//Session
const session = require("express-session");
app.use(
	session({
		secret: "secretPassword",
		resave: false,
		saveUninitialized: false,
	})
);

app.use("/", users);
app.use("/", profile);
app.use("/admin", admin);
app.use("/moderator", moderator);
app.use("/auth", auth);
app.get("/logout", (req, res) => {
	req.session.destroy(() => {
		res.redirect("/");
	});
});
app.listen(3000);
