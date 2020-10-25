var router = require("express").Router();
var db = require("../db/db.json");
var fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/api/notes", function(req, res){
    res.json(db);
});

router.post("/api/notes", function(req, res){
    req.body.id = uuidv4();
    db.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(db), function(){
        res.json(db);
    });
});

// delete note
router.delete("/api/notes/:id", function(req, res){
    console.log(req.params.id);
    for (let i = 0; i < db.length; i++) {
        if (req.params.id === db[i].id){
            db.splice(i,1);
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(db), function(){
        res.json(db);
    });
});
// 

module.exports = router;