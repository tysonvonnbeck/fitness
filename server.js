var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000
var path = require("path")
var mongoose =require("mongoose")
var logger =require("morgan")
// var db =require("./models")
var db = require("./models");
console.log(db);

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,
useUnifiedTopology: true });


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
});

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "public/stats.html"))
});

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err)
    res.json(err);

});


// add workout
app.put("/api/workouts/:id", (req,res) => {
    db.Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
}); 
}); 


// create workout
app.post("/api/workouts", (req, res) =>{
    db.Workout.create(req.body)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.json(err);
}); 
});

//workout range
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
       
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });