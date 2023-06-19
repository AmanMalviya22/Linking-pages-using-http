const express = require("express");
const path = require("path");
const port = 8000;
const db=require('./config/mongoose');
//app has all functionality of express
const app = express();
//setup out view engine as ejs
app.set("view engine", "ejs");
//set up views folder and used it in current file
app.set("views", path.join(__dirname, "views"));
//adding the middleware, you can access the parsed form data in the req.body object within your route handlers
app.use(express.urlencoded({ extended: true }));
// middle ware to accessss assets folder || or static files
app.use(express.static("assets"));
// created our own middleware1
app.use(function (req, res, next) {
  console.log("middleware 1 is called");
  req.myname = "rahul";
  // calling next middleware
  next();
});

// //created our own middleware2
app.use(function (req, res, next) {
  console.log("myname form middleware 2", req.myname);
  console.log("middleware 2 is called");
  //calling next middleware
  next();
});

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
  console.log("my name frome home route", req.myname);
  res.render("home", { title: "my express app", contact_list: contactList });
});

//controller for practice route
app.get("/practice", function (req, res) {
  res.render("practice", { title: "my practice app" });
});

//controller for create-contact route
app.post("/create-contact", function (req, res) {
  contactList.push({
    name: req.body.name,
    age: req.body.age, // Add the phone property
  });
  res.redirect("back");
});

app.get('/delete-contact/',function(req,res){
  let name=req.query.name;
  let index=contactList.findIndex(contact=>contact.name==name);
  if(index!=-1){
    contactList.splice(index,1);
  }
  res.redirect('back');
})

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server", err);
  }
  console.log("server is started");
});
