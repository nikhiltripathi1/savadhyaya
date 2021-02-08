const mongoose=require('mongoose');
const schema = mongoose.Schema;
const UsersSchema=new Schema({
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    score: {
        type:Number,
        required:true
    },
    gamesplayed: {
        type:Number,
        required:true
    }
    
});
const Users=mongoose.model('userchar'.UsersSchema);
module.exports=Users;
