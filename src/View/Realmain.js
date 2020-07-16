import React from 'react'
import {Provider} from 'react-redux'
import Realheader from './Realheader'
import store from '../Store'

export default class Realmain extends React.Component{
    render(){
        return(
                <Provider store={store}>
                    <Realheader />
                </Provider>
        );
    }
}