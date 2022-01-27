const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//ROUTE1: Get all the notes using GET:"/api/notes/getallnotes". Login requied
router.get("/getallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//ROUTE2: Add a new note using POST:"/api/notes/addnote". Login requied
router.post(
  "/addnote", fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({min: 5}),
  ],
  async (req, res) => {
    const { title,description,tag } = req.body;
    //If there are errors,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Notes ({
            user: req.user.id,
            title,
            description,
            tag
        })
        const saveNote = await note.save();
        res.json(saveNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE3: update an existing note using PUT:"/api/notes/updatenote". Login requied
router.put("/updatenote/:id", fetchuser,async (req, res) => {
    const { title,description,tag } = req.body;
    try {
        //Create a new note
        const newnote = {};
        if(title){newnote.title = title}
        if(description){newnote.description = description}
        if(tag){newnote.tag = tag}
        //find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not Found");
        }
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed");
        }
    
        note = await Notes.findByIdAndUpdate(req.params.id,{$set : newnote}, {new: true})
        res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

//ROUTE4: delete an existing note using DELETE:"/api/notes/deletenote".Login required
router.delete("/deletenote/:id", fetchuser,async (req, res) =>{
    try {
        //find the note to be deleted
        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send("Not Found")
        }
        //allow deleting the note if the user is verified
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not allowed");
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", note: note})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
