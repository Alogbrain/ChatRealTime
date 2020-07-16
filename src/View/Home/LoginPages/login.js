import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../Action'
import './Login.css'
class Login extends React.Component{

    constructor(props){
        super(props)
    }
    render()
    {
        const _login = () =>{
            // var randomstring = require("randomstring");
            var min = 1;
            var max = 100;
            var Rand = min + (Math.random()*(max-min))
            let message = {
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "roomID"  : Rand.toString()
            }

            fetch('/login',{
                method : 'POST',
                headers:{
                    'content-Type' :'application/json'
                },
                body : JSON.stringify(message)
            }).then(
                response => response.json(),
                // error => console.log('An error occured', error)
            ).then(data =>{
                if(data.message ==="wrong username" || data.message === "wrong password" ){
                    alert("wrong username or password")
                }
                else if (data.message === "customers" || data.message === "customersSupport"){
                    console.log("call Login method")
                    this.props.Login(data)
                    if(data.action === "login"){
                        console.log("call UPDATE method")
                        this.props.updateCustomers(data)
                    }
                    
                }
            })
        }
        return(
            <React.Fragment>
                <div className="wrapper fadeInDown" id="nguyen" >
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54424813_2104573432990181_6339272824389107712_n.jpg?_nc_cat=107&_nc_oc=AQmqWqWMTTeNWqJFz-4Ug2GGzK3rlR4t6djXaUnhJY5dh0tTvB4OPk9RNpzQydnmYCE&_nc_ht=scontent.fsgn3-1.fna&oh=d32a69e509d223b6665a493c3c8582dc&oe=5E1260E2" 
                            className="rounded-circle user_img_msg" id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" ref="txtUsername" id="username" className="fadeIn second" name="login" placeholder="login"/>
                            <input type="text" ref="txtPassword" id="password" className="fadeIn third" name="login" placeholder="password"/>
                            <input type="button" className="fadeIn fourth" value="Log In" onClick={_login}/>
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="nguyen">Forgot Password?</a>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}
export default connect(null,actions)(Login);