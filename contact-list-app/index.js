const express = require("express");
const path = require("path");
const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let contactList = [
  {
    name: "aman",
    age: 20,
  },
  {
    name: "rohit",
    age: 25,
  },
  {
    name: "monika",
    age: 23,
  },
];

//created controller for home route or entry point
app.get("/", function (req, res) {
  res.render("home", { title: "my express app" ,contact_list:contactList});
});

app.get("/practice", function (req, res) {
  res.render("practice", { title: "my practice app" });
});
app.post('/create-contact',function(req,res){
    var data=req.body;
    console.log(data.name);
    console.log(data.phone);
    return res.redirect('/practice');
})

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server", err);
  }
  console.log("server is started");
});
