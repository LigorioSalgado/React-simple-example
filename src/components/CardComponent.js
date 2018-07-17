import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardComponent extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="card" style={{width: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Height: {this.props.height}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Mass: {this.props.mass}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Gender: {this.props.gender}</h6>
                    
                </div>
            </div>
        )
    }


}

CardComponent.propTypes = {
    name:PropTypes.string.isRequired,
    height:PropTypes.string.isRequired,
    mass:PropTypes.number.isRequired,
    gender:PropTypes.string.isRequired

}


export default CardComponent