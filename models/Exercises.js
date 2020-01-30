var mongoose = require("mongoose") 
var Schema = mongoose.Schema
var ExerciseSchema=new Schema({
        type: {
            type:String,
            required:true
        },
        name: {
            type:String,
            required:true
        },
        duration: {
            type:Number,
            required:true
        },
        weight: {
            type:Number,
            required:true
        },
        reps: {
            type:Number,
            required:true
        },
        sets: {
            type:Number,
            required:true
        },
        distance: {
            type:Number,
            required:true
        }
})
var Exercises = mongoose.model("Exercises", ExerciseSchema)
module.exports=Exercises