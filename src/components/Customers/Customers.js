import React from 'react'
import * as actions from '../../Action'
import { connect } from "react-redux"
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import Popup from 'reactjs-popup'
// import { ChatFeed, Message } from 'react-chat-ui'
import myatmosphere from '../../Atmosphere/atmosphere'
import {Chat, addResponseMessage} from 'react-chat-popup'
class customers extends React.Component {

    constructor(props) {
        super(props)
        // this.state = {
        //     messages: [
        //         new Message({
        //             id: 1,
        //             message: "I'm the recipient! (The person you're talking to",
        //         }),
        //         new Message({
        //             id: 0,
        //             message: "I'm you -- the blue bubble!"
        //         }),
        //     ],
        // };
        this.state ={
            customerSupportName :""
        }
        console.log(this.props.user.roomID)
        let a = new myatmosphere(this.props.user.roomID, this.onMessage.bind(this));
        this.a = a;
        this.a.open();
        console.log("Open Client")
    }
    onMessage(data) {
        if (data.sender === this.props.user.username) {
            console.log("onMessage sender");
        } else {
            console.log("fail");
            addResponseMessage(data.message)
        }
        this.setState({
            customerSupportName : data.customerSupportName
        })
    }
    render() {
        const _logout = () => {
            let message = {
                "username": this.props.user.username,
            }
            fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            this.props.Logout(this.props.user)

        }
        let handleNewUserMessage = (newMessage) => {
            let message = {
                "sender": this.props.user.username + "",
                "customerSupportName": this.state.customerSupportName + "",
                "action": "support",
                "message": newMessage,
                "customerName": this.props.user.username + "",
                "roomID": this.props.user.roomID + "",
                "customerStatus": "inChat"
            }
            this.a.sendMessage(JSON.stringify(message))
        }
        return (
            <React.Fragment>
                <div className="wrapper fadeInDown" >
                    <div className="formContent">
                        <form>
                            <BrowserRouter>
                                <Route exact path="/" />
                                <Link to="/"><input type="button" className="fadeIn fourth" value="Log Out" onClick={_logout} /></Link>
                            </BrowserRouter>
                        </form>
                        <Chat handleNewUserMessage={handleNewUserMessage}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(null, actions)(customers);





{/* <Popup trigger={<button style={{ alignSelf: "flex end", backgroundColor: "rgb(53, 204, 230)", border: "0px", borderRadius: "50%", boxshadow: "rgb(181, 181, 181) 0px 2px 10px 1px", height: "60px", marginTop: "10px", width: "60px", outline: "none", float: "right", position: "absolute", bottom: "0", right: "0" }}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAABmJLR0QA/wD/AP+gvaeTAAACc0lEQVRYhcWXzYtNcRjHP891WWim8V7kLVmNyCzsJE2zUJqypMmUlJcFeSs2FEuUIvEHzMaOZqwMSfK6EBvKS1hwEWLkZcTH4hy5xnTvOeeO7nd1zj3P9zmfe37P8zvPCRqQ2gasBKYDpRzWn8Br4HJEfGyEAXWd+tbG9EHtBYiCEN3AOeAFcBh4kP7LrCoB7cA+YBrQWYQD9br6SZ1fKMGfPO3qsDpQNMEn9WIjEFW57qjPygX9E4ChOjfoBpYBNyPifI3QIWBmIYr0cZ6tcX3/iKLcWyP2ilrJ03J5tA14RFKET4Dt9QxFl6ae+oELwHOgBfjSFJCI2KjOAa4Bk4GNmUHUBcA6ksIZX8c3LgPPBmA2sDYi6rZnOYXYBBwDJma4QVb1AW8j4kyW4LK6HDgNPAZ2ALeB73V8rzLkngjMUksRUX/XVfvSFluSIflvT832TWPWq2/UljpxV9TK7+26khUiK0iOXPfUpyWSwvs6FkkLQCwmefndHZP2VRcBHeQr9knArvT4SMMg6hbgBMX2pHdAT0RcHdWszgOOAruBNmA/sDki3leFhXoQOADcBw4BP3JAfKN6QlNvqU9HgHSoj9Wlapf6UJ1bdX1Y/Zp22y11ag6A0TUaSAbPcApxSW2t+n2NOqDmXqaiNXIDqAC9EVHdcZ3AapJh+uV/B4mIFUV8tfS/5pHcKgGfgSlqU6FKJDNDK7C5mSBlktd/L3BSXUWyJ+RRBTgVEd8aplEXqoPqz0zfZ/9qUG1Rj6fnuafyMkBEPAK61BkkM2Ye7QG2AoMkA3PzpO4d8YSKfaeMEczOqqVtHkgK06P2q1mG67/0C1tTB0BaqpsDAAAAAElFTkSuQmCC" alt="open launcher" />
</button>} modal>
    <div className="container">
        <div className="chatfeed-wrapper">
            <ChatFeed 
                message={this.state.messages}
                isTyping={this.state.is_typing}
                hasInputField={false}
                showSenderName
                bubblesCentered={false}
                bubbleStyles={
                    {
                        text:{
                            fontSize:30
                        },
                        chatbubble:{
                            borderRadius :70,
                            padding:40
                        }
                    }
                }
            />
        </div>
    </div>
    <div>Popup content here !!</div>
</Popup> */}