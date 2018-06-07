// Importing express
var express = require("express");
// Defining express router as router inside burgers_controller.js
var router = express.Router();

// Importing burgers.js model 
var burger = require("../models/burger.js");

// Creating routes
router.get("/", function(req,res){
    res.redirect("burgers");
});

router.get("/burgers", function(req,res){
    burger.all(function(burgerData){
        res.render("index", {burger_data:burgerData });
    });
});

router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req,res){
    burger.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;