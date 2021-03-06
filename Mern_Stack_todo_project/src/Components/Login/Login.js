import { useDispatch, useSelector } from "react-redux"
import UserService from "../../Services/UserService";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login= () =>{

    const dispach=useDispatch();
    const navigate=useNavigate();

    const {email,password,isLogged} =useSelector((state)=> state)
    console.log(isLogged)


    useEffect( ()=>{
        const localData =localStorage.getItem("token");

        if(localData) {
            navigate("/list")
        }
    },[])



    const emailChangeHandler=(event)=>{
        dispach({type:'email',value:event.target.value})
    }

    const passwordChangeHandler=(e)=>{

        dispach({type:'password',value:e.target.value})

    }
    const loginHandler=(event)=>{

        event.preventDefault();
        UserService.loginUser( {"email":email, "password":password}).then((res)=>{
            console.log(res);
            //localStorage.setItem("token",res.data.token);
            if(res.data!==""){
                localStorage.setItem("token",res.data.token);
                dispach({type:"logged",value:true})

                navigate("/list")
                console.log("1")
            }
            else
            {
                //console.log("2")
                dispach({type:"logged",value:false})
            }
        })

    }

    return (
        <div className="container mt-3">

            {isLogged ===false?(
                <div className="alert alert-danger">
                    <strong>Error:</strong> Login Credentials Failed
                </div>
                
            ):(
                ""
            )}
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={emailChangeHandler}
                       
                    />

                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={passwordChangeHandler}
                    />

                </div>
                
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;