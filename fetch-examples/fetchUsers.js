export default ( function (){

    function fetchAllUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => console.log(json));
    }
    
    function fetchSingleUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => console.log(json));
    }

    return{
        fetchAllUsers,
        fetchSingleUser
    }
})();
