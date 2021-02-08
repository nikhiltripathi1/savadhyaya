const mongoose=require('mongoose');
const schema = mongoose.Schema;
const DailyQuesSchema=new schema({
    username: {
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default: Date.now()
    },
    ques: {
        type:String,
        required:true
    },
    options:{
        type:Array,
        require:true
    },
        
    majorityAnswer: {
        type:String,
        
    },
    hint: {
        type:String,
        required:true
    },
    perCorrectResponse:{
        type:Number,
        default:0
    }



    
});
module.exports = DailyQues = mongoose.model('queschar', DailyQuesSchema);