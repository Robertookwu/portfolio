export default 
function stringMatch(text, current) {
    return isReady(text,current) && isMatch(text, current);
}

function prepareString(string){
     return string.toLowerCase();
}

function isString(input){
    return typeof input ? "string" : false;
}

function isReady(text, current){
    return isString(text) && isString(current);
}

function isMatch(text, current){
   return prepareString(text) == prepareString(current) ? true: false;
}

//module.exports = {stringMatch};