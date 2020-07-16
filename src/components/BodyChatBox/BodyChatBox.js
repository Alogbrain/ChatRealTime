import React from 'react'
export default class BodyChatBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            this.props.messages.map(value => {
                if (value.id === 0) {
                    return (
                        <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send">
                                {value.message}
                                <span className="msg_time_send">8:55 AM, Today</span>
                            </div>
                            <div className="img_cont_msg">
                                <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/54424813_2104573432990181_6339272824389107712_n.jpg?_nc_cat=107&_nc_oc=AQkh8JVHagr9tajYo8YPoUE7UlQfYeqX1YGvF8BK_zc0U45kF2PRv2fvNJdxNQDepPM&_nc_ht=scontent.fhan3-2.fna&oh=1b212b5e4258d4fd25e1ea72c9c1514d&oe=5E39EDE2" className="rounded-circle user_img_msg" />
                            </div>
                        </div>
                    );
                }
                else if (value.id === 1) {
                    return (
                        <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                                <img src={this.props.userData.image} className="rounded-circle user_img_msg" />
                            </div>
                            <div className="msg_cotainer">
                                {value.message}
                                <span className="msg_time">8:40 AM, Today</span>
                            </div>
                        </div>
                    )
                }
            })
        )
    }
}