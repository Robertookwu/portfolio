import fetchUser from "./fetchUsers.js";
import postData from "./postData.js";
import fileUpload from "./fileUpload.js";

const fetchUsers = document.getElementById("fetch-users");
const fetchForm = document.getElementById("fetch-form");
const postForm = document.getElementById("post-form");
const postUsername = document.getElementById("post-username");
const postUserData = document.getElementById("post-user-data");

function handleFormClicks(){
    fetchForm.addEventListener("submit",(e) => {
        e.preventDefault();
    });
}
function handlePostDataFormSubmit(){
    postForm.addEventListener("submit",(e) => {
        e.preventDefault();
    });
}
function attachFetchUserClick(){
    fetchUsers.addEventListener("click",(e) => {
        e.preventDefault();
        fetchUser.fetchAllUsers();
    });
    
}
function attachPostUserDataClick(){
    postUserData.addEventListener("click", () => {
        postData.post({username : postUsername.value });
    });
}
handleFormClicks();
handlePostDataFormSubmit();
attachFetchUserClick();
attachPostUserDataClick();