//middleware authorization
//fetch data from header

const ex_jwt=require("express-jwt")

const getTokenFromHeaders =req =>{

    const {

        headers:{authorization}
    }=req;

    //console.log("1")
    if( authorization && (authorization.split(" ")[0] ==="Token")){
        console.log("2")
        return authorization.split(" ")[1];
    }
    //console.log(2);
    return null;

};

const auth={
    
    required: ex_jwt({
        secret:"ABCD",
        userProperty: "user",
        getToken:getTokenFromHeaders,
        algorithms:[ 'HS256']
        //algorihtm HS256 check for valid token
    })
};

module.exports=auth;