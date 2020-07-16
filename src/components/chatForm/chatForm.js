import React from 'react'
import '../chatForm/chatForm.css'
import '../chatForm/chatFormjs'
import { connect } from 'react-redux'
import CustomerList from '../customersList/customersList'
import ChatBox from '../ChatBox/ChatBox'
class chatForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isReset:false,
            msg:""
        }
    }
    handleIsReset=(Amsg)=>{
        this.setState({
            isReset:!this.state.isReset,
            msg : Amsg        
        })
    }

    render() {
        console.log('Render chat Form')
        console.log("message "+JSON.stringify(this.state.msg))
        let customersList = JSON.parse(this.props.cL)
        let listItems = customersList.map((data) => {
            return (
                < CustomerList data={data}  handleIsReset={this.handleIsReset} supportCustomer={this.props.supportCustomer}/>)
        })
        
        if (this.props.showChatForm === false) {

            return (
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">
                        {/* Chat List */}
                        <div className="col-md-4 col-xl-3 chat">
                            <div className="card mb-sm-3 mb-md-0 contacts_card">
                                {/* Chat list header */}
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat list body */}
                                <div className="card-body contacts_body">
                                    <ui className="contacts" >
                                        {listItems}
                                    </ui>
                                    {/* Chat list footer */}
                                    <div className="card-footer"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-xl-6 chat">
                            <div className="card">

                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container-fluid h-100">
                    <div className="row justify-content-center h-100">

                        {/* Chat List */}
                        <div className="col-md-4 col-xl-3 chat">
                            <div className="card mb-sm-3 mb-md-0 contacts_card">
                                {/* Chat list header */}
                                <div className="card-header">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search..." name="" className="form-control search" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                                {/* Chat list body */}
                                <div className="card-body contacts_body">
                                    <ui className="contacts" >
                                        {listItems}
                                    </ui>
                                    {/* Chat list footer */}
                                    <div className="card-footer"></div>
                                </div>
                            </div>
                        </div>
                        <ChatBox userData = {this.props.userData} isReset={this.state.isReset} msg={this.state.msg}/>
                    </div>
                </div>
            );
        }

    }
}
const mapStateToProps = (state) => {
    return {
        customersList: state.UpdateCustomers.data,
        showChatForm : state.ShowChatForm.status,
        userData     : state.ShowChatForm.UserData
    }
}
export default connect(mapStateToProps, null)(chatForm)


/* <div className="d-flex bd-highlight">
    <div className="img_cont">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUntwAhMrm13gYuKUCzNpSlWZNRQmuU6MFpTiidM93THV8dsyug" className="rounded-circle user_img" />
        <span className="online_icon"></span>
    </div>
    <div className="user_info">
        <span>Chat with Maryam Naz</span>
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
</div> */