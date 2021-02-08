const express = require("express");
const router = express.Router();


//User model
const DailyQues = require("../../models/dailyques");
router.post('/', (req,res) => {
    const dailyquestion = new DailyQues({
        username: "Harsh",
        ques: "lorem",
        option: ["option1","option2","option3","option4"],
        hint:"lorem",
        
    });
    dailyquestion.save()
              .then(item => res.json(item))
              .catch(err=>console.log("error"));
});

module.exports = router;