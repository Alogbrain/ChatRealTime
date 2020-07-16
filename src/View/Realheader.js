import React from 'react'
import { connect } from 'react-redux'
import Chatform from '../components/chatForm/chatForm'
import App from '../View/Home/App'
import * as Action from '../Action'
import cookie from 'react-cookies'
import CustomersPage from '../components/Customers/Customers'

class Realheader extends React.Component {
    constructor(props) {
        super(props)
        if(typeof cookie.load("customersList") === "undefined"){
            this.state ={
                cl : [],
            }
        }else{
            this.state = {
                cl : JSON.stringify(cookie.load("customersList"))
            }
        }
    }
    render() {
        console.log(this.state.cl)
        if(this.props.customersList && this.props.customersList.length > 0){
            this.props.customersList.map(value => {
                if(this.state.cl.includes(JSON.stringify(value))=== false ){
                    cookie.save("customersList",this.props.customersList,{path: '/'})
                }
            }) 
        }
        if (this.props.responseMessage.message === "customersSupport" && this.state.cl.length > 0) {
            console.log('render1')
            return (
                     <Chatform cL={this.state.cl} supportCustomer={this.props.responseMessage}/> 
            );
        }
        else if (this.props.responseMessage.message === "customers") {
            console.log('render2')
            return (
                <React.Fragment>
                    <CustomersPage user={this.props.responseMessage}/>
                </React.Fragment>
            );
        }

        else {
            console.log('render3')
            return (
                <React.Fragment>
                    <App />
                </React.Fragment>
            );
        }
    }
}
const mapStateToProps = (state) => {
    if (typeof state.Login.responseMessage === "undefined"  ) {
        return {
            responseMessage: {
                username: "",
                message: ""
            },
            customersList: state.UpdateCustomers.data
        }
    }
    else if(state.Logout.LogoutStatus === "Logout"){
        state.Logout.LogoutStatus = "";
        return{
            responseMessage: {
                username: "",
                message: ""
            },
            customersList : [],
        }
    }
    else {
        return {
            responseMessage: state.Login.responseMessage,
            customersList: state.UpdateCustomers.data
        }
    }
}
export default connect(mapStateToProps,Action )(Realheader)