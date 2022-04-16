import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";

const EditUser=()=>{

    const {userID,fullname,usermail,userpassword,userphone,usergender}=useSelector(state=>state)
    const dispatch=useDispatch()

    const navigate=useNavigate()

    console.log("edi user")
    console.log(userID)

    const submitHandler=(e)=>{

        e.preventDefault()
        const userData={
            "_id":userID,
            "fullname":fullname,
            "email":usermail,
            "gender":usergender,
            "phone":userphone,
            "password":userpassword,
        }
        console.log(e._id)
        UserService.postUser(userData).then( (res) =>{
            console.log(res);

            if(res.status==200){
                navigate("/list");
            }
        })
    }
    return (
        <div className="container m-2">
            <h3>Edit User</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" 
                        name="fullname" 
                        id="fullname" 
                        className="form-control" 
                        placeholder="Enter FullName"
                        value={fullname}
                        onChange={(e)=>dispatch({type:"fullname",value:e.target.value})}
                    />    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                        name="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Enter Email"
                        value={usermail}
                        onChange={(e)=>dispatch({type:"usermail",value:e.target.value})}
                    />    
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Password</label>
                    <input type="password" 
                        name="password" 
                        id="password" 
                        className="form-control" 
                        placeholder="Enter Password"
                        value={userpassword}
                        onChange={(e)=>dispatch({type:"userpassword",value:e.target.value})}
                    />    
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone No.</label>
                    <input type="text" 
                        name="phone" 
                        id="phone" 
                        className="form-control" 
                        placeholder="Enter Phone No."
                        value={userphone}
                        onChange={(e)=>dispatch({type:"userphone",value:e.target.value})}
                    />    
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input type="radio" 
                            name="gender" 
                            id="gender" 
                            className="form-check-input"
                            value="Male"
                            checked={usergender==="Male"}
                            onChange={(e)=>dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="gender" className="form-check-lable">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" 
                            name="gender" 
                            id="gender" 
                            className="form-check-input"
                            value="Female"
                            checked={usergender==="Female"}
                            onChange={(e)=>dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="gender" className="form-check-lable">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" 
                            name="gender" 
                            id="gender" 
                            className="form-check-input"
                            value="Others"
                            checked={usergender==="Others"}
                            onChange={(e)=>dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="gender" className="form-check-lable">Others</label>
                    </div>
                    <div className="form-group">

                        <input type="submit" value="Add User"
                            className="btn btn-primary"
                        />

                    </div>
                </div>
            </form>
        </div>
    )
}
export default EditUser;