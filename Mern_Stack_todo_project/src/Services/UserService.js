import axios from 'axios';

const USER_BASE_URL = "http://localhost:3000/user";

const headers ={
    "Content-Type":"application/json",
    Authorization:"Token "+ localStorage.getItem('token'),
};

class UserService{
    /*
    fetch('url', {

        method:'POST',
        header:{

            "Content-Type":'application/json',
            Authorization :'Token'
        }
        body:{}
    })
    */

    loginUser(credentials)
    {
        return axios.post(USER_BASE_URL + "/login" , credentials)
        //return axios.post(USER_BASE_URL+"/login",credentials,headers)
    }

    //get User

    getUser(){
        console.log("1");
        return axios.get(USER_BASE_URL,{headers: headers})
    }

    //Post or create User

    postUser(users){
        console.log("1");
        return axios.post( USER_BASE_URL, users ,{ headers: headers })
    }

     //Delete User

     deleteUser(id){
        console.log(headers);
        return axios.delete( USER_BASE_URL + "/"+id ,{ headers: headers });
    }

    editUser(id){
        return axios.post(USER_BASE_URL,"/edit"+id,{headers: headers})
    }
}

export default new UserService();