var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000
var mongoose =require("mongoose")
// var db=require("./models")
var exercise_controller=require("./controllers/exercise_controller")

exercise_controller(app)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
mongoose.connect("mongodb://localhost/workout",{useNewUrlParser: true})
app.listen(PORT,function(){
 console.log("app is listening on port http://localhost:" + PORT);
 
})