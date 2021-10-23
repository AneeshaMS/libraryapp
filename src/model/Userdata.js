// Accessing mongoose
const mongoose=require('mongoose');
//Database connection
mongoose.connect("mongodb+srv://userzero:userzero@ictakfiles.4ubv7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
//Schema creation
const Schema=mongoose.Schema;
const UserSchema = new Schema({
    name:String,
    phonenumber:String,
    email:String,
    password:String
    
});
//Model creation
var Userdata=mongoose.model('Userdata',UserSchema);
module.exports=Userdata;