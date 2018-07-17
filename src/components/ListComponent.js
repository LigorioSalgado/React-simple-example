import React, { Component } from 'react';
import {getCharacters} from '../services';
import CardComponent from './CardComponent';


class ListComponent extends Component {

    constructor(){
        super();
        this.state = {
            characters:null
        }
    }

componentWillMount(){
    getCharacters().then((characters) =>{
        this.setState({
            characters:characters.data.results
        })
    }).catch((err) =>{
        console.log(err)
    })

}

componentDidMount(){

}

updateCards = () => {

    if(this.state.characters !== null){
        return this.state.characters.map((character,index,array) => {
            return (
                <div className="col-md-3" key={index}>
                    <CardComponent name={character.name} 
                    mass={parseInt(character.mass)} 
                    height={character.height} 
                    gender={character.gender}
                    />
                </div>
            )
        })
    }else{
        return (
            <div></div>
        )

    }
    

}
    
render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    {this.updateCards()}
                </div>
            </div>
        )

    }




}


export default ListComponent;