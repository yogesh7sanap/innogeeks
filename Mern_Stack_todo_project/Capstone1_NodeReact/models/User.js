const {Schema}=require("mongoose");

const crypto=require("crypto")

const jwt=require("jsonwebtoken")



const UserSchema=new Schema({

    fullname:String,
    email:String,
    gender:String,
    phone:String,

    isDel:{

        type:Boolean,
        default:false
    },
    salt:String,
    hash:String
});
//pass the password from postman virtually
//generate the salt and store it in database
//generate the hash
UserSchema.methods.setPassword=function(password){

    this.salt=crypto.randomBytes(16).toString('hex');
    this.hash=crypto.pbkdf2Sync(password,this.salt ,1000,1000,"sha512").toString("hex");//encryption
}

//if entered passward generates the hash which is equal to the hash present in database
//access is allowed
UserSchema.methods.validatePassword=function(password){

    var newhash=crypto.pbkdf2Sync(password,this.salt ,1000,1000,"sha512").toString("hex");
                                                        //1000-iterations for computing hash 
    //console.log(newhash);
    return this.hash=== newhash;
}

//jwt authentication
UserSchema.methods.generateToken=function(){

    return jwt.sign({

        _id:this._id,
        fullname:this.fullname,
        email:this.email
        
    },"ABCD" //{expiresIn: '1h'}
    )
}

module.exports=UserSchema;