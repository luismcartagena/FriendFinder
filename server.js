var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "guest",
  password: "Sunday2018!",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes", function(error, quotes){
    if (error) {
      res.status(500).end();
    }
    res.render("index", {quotes: quotes});
  })
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes WHERE id = ?", [req.params.id], function(error, quotes){
    if (error) {
      res.status(500).end();
    }
    res.render("single-quote", quotes[0]);
  })
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  let query = connection.query("INSERT INTO quotes SET ?", [req.body], function(error, quotes){
    if (error) {
      res.status(500).end();
    }
    res.status(200).end();
  })
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(error, quotes){
    if (error) {
      res.status(500).end();
    }
    res.status(200).end();
  })
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  let query = connection.query("UPDATE quotes SET ? WHERE id = ?", [req.body, req.params.id], function(error, quotes){
    if (error) {
      res.status(500).end();
    }
    res.status(200).end();
  })
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
