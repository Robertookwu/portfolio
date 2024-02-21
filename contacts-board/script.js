import find from "./contact.js";
import deliver from "./messages.js";
const contactName = document.getElementById("current-contact-name");
const contactNumber = document.getElementById("current-contact-number");
const contactMessage = document.getElementById("current-contact-message");
const contactAdd = document.getElementById("current-contact-add");
const contactForm = document.getElementById("current-contact-form");
const pastContactInput = document.getElementById("past-contacts-search-input");
const pastContactButton = document.getElementById("past-contacts-search-button");
const pastContactForm = document.getElementById("past-contacts-search-form");
const pastContactMessageBoard = document.querySelector(".past-contacts-message-wrapper");
const pastContactSelectType = document.getElementById("past-contacts-search-type");

function attachClick(){
    contactAdd.addEventListener("click", (e) => {
        e.preventDefault();
        storeMessage(retrieve());
    });
}
function handleClick(){
    attachClick();
    clear();
}
function retrieve(){
    return ({name:contactName.value, number:contactNumber.value, message:contactMessage.value});
}
function storeMessage(newMessage){
    const archive = localStorage.getItem("contact-messages");
    const joiner = "|";
    const messagePrepared = JSON.stringify(newMessage);
    const newArchive = archive + joiner + messagePrepared;
    localStorage.setItem("contact-messages", newArchive);
}
function fetchMessages(){
    return localStorage.getItem("contact-messages");
}
function clear(){
    contactName.value = "";
    contactNumber.value= "";
    contactMessage.value="";
}
function attachSearchClick(type){
    pastContactButton.addEventListener("click",(e) => {
        e.preventDefault();
        type == "name" ? findByName(): findByNumber();
    });
}
function handleSearchClick(type){
    attachSearchClick(type);
}
function changeFindType(){
    pastContactSelectType.addEventListener('change',(e) => {
        e.preventDefault();
        handleSearchClick(pastContactSelectType.value);
    });
}
function findByName(){
    pastContactMessageBoard.innerHTML = "";
    pastContactMessageBoard.appendChild(deliver().list(find().findContactByName(pastContactInput.value)));
}
function findByNumber(){
    pastContactMessageBoard.innerHTML = "";
    pastContactMessageBoard.appendChild(deliver().list(find().findContactByNumber(pastContactInput.value)));
}
handleClick();
handleSearchClick("name");
changeFindType();