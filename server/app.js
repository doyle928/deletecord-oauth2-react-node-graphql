const Discord = require("discord.js");
// const config = require("./json/config.json");
const client = new Discord.Client();
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const tokenMain = require("./token");
const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
const session = require("express-session");
const discord2 = require("./discord2");

// client.config = config;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const scopes = ["identify"];

passport.use(
  new DiscordStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "http://localhost:8080/auth/discord/callback",
      scope: scopes
    },
    function(accessToken, refreshToken, profile, cb) {
      process.nextTick(function() {
        console.log(accessToken, refreshToken, profile);

        return cb(null, profile);
      });
    }
  )
);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 360000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "../build")));
app.use("/about", express.static(path.join(__dirname, "../build")));
app.use("/dashboard", express.static(path.join(__dirname, "../build")));

server.applyMiddleware({ app, path: "/api" });

app.get("/auth/discord", passport.authenticate("discord", { scope: scopes }));
app.get(
  "/auth/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "/"
  }),
  function(req, res) {
    // console.log("before redirect", req.user);
    res.redirect(`/dashboard`); // Successful auth
  }
);
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
app.get(`/info`, checkAuth, function(req, res) {
  //console.log(req.user)
  // res.send(req.user);
  res.json(req.user);
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  // else res.redirect("/");
  res.json({ error: "not logged in" });
}

app.get(`/client`, discord2.clientRoute);

app.listen({ port: process.env.PORT || 8080 }, () =>
  console.log(`Server ready`)
);

console.log("app", tokenMain);
