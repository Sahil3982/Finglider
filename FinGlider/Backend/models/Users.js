const mongoose = require('mongoose');
const { isEmail } = require ('validator');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema(
  { 
    email:{
        type:String,
        required: [true,'Please enter an email'] ,
        unique: true,
        validate: [isEmail,'Please enter a valid Email']

    },
    password:{
        type:String,
        required: [true,'Please enter a password'],
        minlength:[6,'Minimum password length is 6 characters']
    },
    phone: {
        type: String,
        required:[true,'Please enter a valid phone no'] 
      },
    
      isAdmin: {
        type: Boolean,
        default: false,
      },
      
    },
    {
      timestamps: true,
    }
  );

userSchema.pre('save',async function(next){
const salt =await bcrypt.genSalt();
this.password = await bcrypt.hash(this.password,salt);
next();
})

userSchema.post('save',(doc,next) => {
    console.log('new user was created and saved');
    next();
})

userSchema.statics.login =async function (email,password){
    const user = await this.findOne({email});
    if(user){
      const auth =await bcrypt.compare(password,user.password)
      if(auth){
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


  const User = mongoose.model('User',userSchema);
  module.exports= User;
