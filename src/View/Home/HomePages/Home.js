import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import './Home.css'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <React.Fragment>
                <div>
                    <NavLink className="link-page" to="/login">LOGIN PAGE</NavLink>
                </div>
            </React.Fragment>
        )
    }
}