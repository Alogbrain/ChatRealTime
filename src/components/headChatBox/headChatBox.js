import React from 'react'

export default class headChatBox extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src={this.props.userData.image} className="rounded-circle user_img" />
                        <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                        <span>Chat with {this.props.userData.username}</span>
                        <p>1767 Messages</p>
                    </div>
                    <div className="video_cam">
                        <span><i className="fas fa-video"></i></span>
                        <span><i className="fas fa-phone"></i></span>
                    </div>
                </div>
                <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                <div className="action_menu">
                    <ul>
                        <li><i className="fas fa-user-circle"></i> View profile</li>
                        <li><i className="fas fa-users"></i> Add to close friends</li>
                        <li><i className="fas fa-plus"></i> Add to group</li>
                        <li><i className="fas fa-ban"></i> Block</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}