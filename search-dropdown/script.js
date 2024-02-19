import search from "./search.js";

const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const searchDropdown = document.getElementById("search-dropdown");
const searchable = [ 1, 1, 1, 2, 2, 3,3 , "add", "subtract", "divide", "multiply"];

function attachClick (){
    searchButton.addEventListener('click',() => {
        hideDropDown();
        prepareSearch(retrieveSearchText(),retrieveSearchable());});
}

function retrieveSearchText(){
    return searchBox.value;
}

function retrieveSearchable(){
    return searchable;
}

function handleClick(){
    hideDropDown();
    attachClick();
}

function prepareSearch(searchText,searchable){
    let result = search(searchText,searchable);
    showDropdown();
    displayDropDown(populateDropDown(result));
}

function showDropdown(){
    searchDropdown.style.display = "flex";
    console.log("showing dropdown");
}

function hideDropDown(){
    searchDropdown.style.display = "none";
    searchDropdown.innerHTML ="";
}

function populateDropDown(result){
    const dropDownList = document.createElement("ul");
    let list = listDropDown(result.length, result, dropDownList);
    return list;
}
function listDropDown(count,result, collection){
    count > 1 ? listDropDown(count - 1, result, collection) : false;
    return addDropDownItem(fillDropDown(result[count - 1]), collection);
}
function addDropDownItem(item, collection){
    collection.appendChild(item);
    return collection;
}

function fillDropDown(singleResult){
    const dropDownListItem = document.createElement("li");
    dropDownListItem.innerText = singleResult;
    return dropDownListItem;
}

function displayDropDown(list){
    searchDropdown.appendChild(list);
}

handleClick();