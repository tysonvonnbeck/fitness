var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000
var path = require("path")
var mongoose =require("mongoose")
var db =require("./models")
// var exercise_controller=require("./controllers/exercise_controller")


// exercise_controller(app)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,
useUnifiedTopology: true });
app.listen(PORT,function(){
 console.log("app is listening on port http://localhost:" + PORT);
 
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
});

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "public/stats.html"))
});

app.get("api/Workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err)
    res.json(err);

});


// add workout
app.put("api/Workouts/:id", (req,res) => {
    db.Workout.findByIdAndUpdate(req.params.id,{$push:{excersizes:req.body}})
    .then(data => {
        res.json(err);
    });
}); 


// create workout
app.post("api/Workouts", (req, res) =>{
    db.Workout.create(req.body)
    .then(user => {
        res.json(user);
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
       
      })
      .catch(err => {
        res.json(err);
      });
  });