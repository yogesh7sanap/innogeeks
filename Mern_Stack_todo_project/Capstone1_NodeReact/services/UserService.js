const mongoose=require("mongoose");

const UserSchema=require("../models/User");

const User=mongoose.model("User",UserSchema);

class UserService{

    async getUser(){

        //let User=mongoose.model("User",UserSchema);
       // let User=this.getModel();

        return await User.find({isDel:false}).select(["-salt","-hash"]);
                                       //to hide salt and hash
    }

    async setUser(userObj){

        //let User=this.getModel();

        if(userObj["_id"]!== undefined)
        {
            return User.updateOne({_id: userObj["_id"]},{$set: userObj})
        }else{
        const userInstance=new User(userObj);

        userInstance.setPassword(userObj["password"]);
        //password will be passed from postman

        const result =await userInstance.save();
        result["salt"]="";
        result["hash"]="";

        return result;
        }
    }

    async removeUser(id)
    {
        //let User=this.getModel();
        return await User.updateOne({_id:id},{$set:{isDel:true} })

        //return User.updateOne({_id:id},{$set:{isDel:true} })
    }

    async loginUser(email,password){

        //let User =this.getModel();

        let FoundUser=await User.find({email:email})
        //findOne will return object
        //findAll will return array of object
        
        //console.log(FoundUser);
        if(FoundUser)
        {
            if(FoundUser.length >0)
            {
                const user=FoundUser[0];
                console.log("User Found...")
                if(user.validatePassword(password))
                {
                    console.log("Correct Password....")
                    user.salt="";
                    user.hash="";

                    const objUser=user.toObject();

                    //jwt authentication
                    objUser.token=user.generateToken();
                    return objUser;
                }
                else
                {
                    console.log("Password not correct ....")
                    return ;
                    //return {}
                    //return { "error":"Not found", "statudcode":404 }
                }

            }
            else
            {
                return;
                //return {}
                //return { "error":"Not found", "statudcode":404 }
            }
            
           
        }else
        {
            return;
            //return {}
            //return { "error":"Not found", "statudcode":404 }
        }
    }

    // getModel(){

    //     return mongoose.model("User", UserSchema)
    // }
};

module.exports=UserService;