import React from 'react'
import atmosphere1 from 'atmosphere.js'

let socket = atmosphere1;
let subSocket;
let transport = 'websocket';
let fallbackTransport = 'long-polling';
export default class atmosphere extends React.Component{
    constructor(id, onMessage){
        super();
        this.request = {
            url: 'ws://localhost:8080/chat/'+id,
            contentType: 'application/json',
            logLevel : 'debug',
            transport : transport,
            trackMessageLength: true,
            reconnectInterval : 5000,
            fallbackTransport: fallbackTransport
        };
        this.request.onMessage = function (response) {
            console.log('onOpen');
        };
        this.request.onMessage =function(response){
            let message = response.responseBody;
            console.log("OnMessage")
            console.log(message);
            try{
                let json = JSON.parse(message);
                onMessage(json)
            }catch(e){
                console.log(e);
            }
        }
    }
    close(){
        subSocket.close();
        console.log('onClose');
    }
    open(){
        subSocket = socket.subscribe(this.request);
    }
    sendMessage(message){
        subSocket.push(message);
        console.log(message);
        console.log('Push Message');
    }
}