import React from 'react'
import HeadChatBox from '../headChatBox/headChatBox'
// import MessageSend from '../ChatSend/MessageSend'
import BodyChatBox from '../BodyChatBox/BodyChatBox'
import { connect } from 'react-redux'
import * as Action from '../../Action'
import myatmosphere from '../../Atmosphere/atmosphere'
import { Message } from 'react-chat-ui'
class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerStatus: "online",
            messages: [],
            isRs: props.isReset
        }
        console.log("oPen ChatBox");
    }
    componentDidMount(){
        let a = new myatmosphere(this.props.userData.roomID, this.onMessage.bind(this));
        this.a = a;
        this.a.open();
    }
    componentWillReceiveProps(nextProps) {
        let a = new myatmosphere(nextProps.userData.roomID, this.onMessage.bind(this));
        this.a = a;
        this.a.open();
        if (nextProps.isReset !== this.state.isRs) {
            console.log('check again')
            this.setState({
                messages: [],
                isRs: nextProps.isReset
            })
            // this.a.sendMessage(JSON.stringify(nextProps.msg))
        }
    }
    onMessage(data) {
        console.log("check OnMessage ChatBox")
        this.setState({
            customerStatus: data.customerStatus,
        })
        // console.log("ChatBox " + this.state.customerStatus)
        if (data.action === "connect") {
            // cookie.save(data.customerName,"inChat",{path:"/"});
            if (data.customerSupportName === this.props.responseMessage.username || data.customerSupportName === "") {
                data.oldMess.map((chat) => {
                    if (chat.sender === this.props.responseMessage.username) {
                        this.state.messages.push(new Message({ id: 0, message: chat.message, senderName: chat.sender }))
                        this.setState({
                            message: this.state.messages
                        })
                    } else {
                        this.state.messages.push(new Message({ id: 1, message: chat.message, senderName: chat.sender }))
                        this.setState({
                            messages: this.state.messages
                        })
                    }
                })
            }
        } else {
            if (data.sender === this.props.responseMessage.username) {
                this.state.messages.push(new Message({ id: 0, message: data.message, senderName: data.sender }))
                this.setState({
                    messages: this.state.messages
                })
            } else {
                this.state.messages.push(new Message({ id: 1, message: data.message, senderName: data.sender }))
                this.setState({
                    messages: this.state.messages
                })
            }
        }
    }
    render() {
        console.log("render lai");
        // console.log(this.props.userData.username)
        // console.log(this.state.messages);
        console.log('check', this.state.isRs)
        // console.log(this.state.customerStatus);
        const _HandleSend = () => {
            let message = {
                "sender": this.props.responseMessage.username,
                "customerSupportName": this.props.responseMessage.username,
                "action": "support",
                "message": document.getElementById("msgtext").value,
                "customerName": this.props.userData.username,
                "roomID": this.props.userData.roomID,
                "customerStatus": "inChat"
            }
            document.getElementById("msgtext").value = "";
            // console.log("Gui thanh cong")
            this.a.sendMessage(JSON.stringify(message))
        }
        return (
            <React.Fragment>
                {/* Chat box */}
                <div className="col-md-8 col-xl-6 chat">
                    <div className="card">
                        {/* Head chat box */}

                        <div className="card-header msg_head">
                            <HeadChatBox userData={this.props.userData} />
                        </div>
                        {/* Body chat box */}
                        <div className="card-body msg_card_body">

                            <BodyChatBox messages={this.state.messages} userData={this.props.userData}/>
                        </div>
                        {/* Footer Chat Box */}
                        <div className="card-footer">
                            <div className="input-group">
                                <div className="input-group-append">
                                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                </div>
                                <textarea name="" id="msgtext" className="form-control type_msg" placeholder="Type your message..."></textarea>
                                <div className="input-group-append">
                                    <span className="input-group-text send_btn" onClick={_HandleSend}><i className="fas fa-location-arrow" ></i></span>
                                </div>
                                {/* <MessageSend/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    if (typeof state.Login.responseMessage === "undefined") {
        return {
            responseMessage: {
                username: "",
                message: ""
            },
        }
    } else {
        // let message = {
        //     "username": state.Login.responseMessage.username,
        // }
        // fetch('/getOldMessages', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(message)
        // }).then(
        //     response => response.json(),
        //     error => console.log('An error occurred.', error)
        // ).then(data => {
        //     if (typeof data.oldMess !== "undefined") {
        //         data.oldMess.map((chat) => {
        //             if (chat.sender === state.Login.responseMessage.username) {
        //                 // addUserMessage(chat.message)
        //             } else {
        //                 // addResponseMessage(chat.message)
        //             }
        //         });
        //     }
        // })
        return {
            responseMessage: state.Login.responseMessage,
        }
    }
}
export default connect(mapStateToProps, Action)(ChatBox)