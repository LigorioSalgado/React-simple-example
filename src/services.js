import axios from 'axios';



let getCharacters =  function(){
    return axios.get("https://swapi.co/api/people/");
}






export {
    getCharacters
}