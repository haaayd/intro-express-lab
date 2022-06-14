// import modules

// import * as studentRoster from "./data/students-roster.js"
import express from "express"
import { students } from "./data/students-roster.js"
  // this will import the students data 
  

// Create Express app

const app = express()

// Configure the app (app.set)
app.set("view engine", "ejs")


// Mount Middleware (app.use)



// Mount routes
app.get("/", function(req,res){
  res.send("<h1>hello, friend!</h1>")
})

app.get("/home", function(req, res){
  res.render("home")

})

app.get("/students", function (req, res){
  res.render("students/index", {
    students : students

  })
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})