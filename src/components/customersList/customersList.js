import React from 'react'
import * as actions from '../../Action'
import { connect } from 'react-redux'
class customerList extends React.Component {
    constructor(props) {
        super(props)
    }
    hanleClick = () => {
        this.props.showChatForm(this.props.data);
        let message = {
            "sender": this.props.supportCustomer.username,
            "customerSupportName": this.props.supportCustomer.username,
            "action": "connect",
            "message": "",
            "customerName": this.props.data.username,
            "roomID": this.props.data.roomID,
            "customerStatus": "inChat"
        }
        this.props.handleIsReset(message);
    }
    render() {
        return (
            <li className="active" onClick={this.hanleClick}>
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src={this.props.data.image} className="rounded-circle user_img" />
                        <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                        <span>{this.props.data.username}</span>
                        <p>{this.props.data.username} is online</p>
                    </div>
                </div>
            </li>
        );
    }

}
export default connect(null, actions)(customerList);