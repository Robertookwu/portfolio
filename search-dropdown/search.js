
//const {stringMatch} = require("./searchString.js");
import stringMatch from "./searchString.js";

export default
 function search(text, searchable){
    let arr= Array.isArray(searchable);
    return arr ? display(match(text, searchable)) : false;
}
function retrieve(text,current){
    return isPresent(text,current) ? current: false;
}
function match(text, searchable){
    let searched = searchable.map((current) => {return retrieve(text,current)});
    return searched;

}
function display(searched){
    let accumulator = [];
    let displayable = searched.reduce((accumulator, current) => {current != false? accumulator.push(current): [];
    return accumulator;}, []);
    return displayable;
}
function isPresent(text,current){

    return foundMatch(text,current)|| foundPresent(text,current);
}
function isMatch(text, current){
    return typeof text == typeof current ? typeof text : false;
}
function foundMatch(text, current){
    return isMatch(text, current) == "string" ? stringMatch(text, current) : false; 
}
function foundPresent(text, current){
    return text == current ?  true :  false;
}

//module.exports = {search};
