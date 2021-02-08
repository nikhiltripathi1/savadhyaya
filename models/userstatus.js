const mongoose=require('mongoose');
const schema = mongoose.Schema;
const UserStatusSchema=new Schema({
    ques_id: {
        type:Number,
        required:true
    },
    response:{
        type:String,
        required:true
    },
    points: {
        type:Number,
        required:true
    }
});
const status=mongoose.model('statuschar'.UserStatusSchema);
module.exports=status;