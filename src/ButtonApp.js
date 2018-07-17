import React, { Component } from 'react';


class ButtonApp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let style = {display:"inline-block"}
        return (
            <div style={style}>
                <button onClick={this.props.method}>{this.props.name}</button>
            </div>

        );
    }



}


export default ButtonApp;