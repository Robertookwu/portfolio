export default (function (){

    async function post(data){
        try{
            const response = await fetch("http://localhost:3000/username", {
                method: "POST",
                mode: "no-cors",
                credentials:"same-origin",
                cache:"no-cache",
                headers:{
                    "Accept": "application/json",
                    "Content-Type":"application/json"
                },
                redirect:"follow",
                referrerPolicy:"no-referrer",
                body: JSON.stringify(data)
            });
            const result = await response.text();
            console.log("Success:", result);
        }catch(error){
            console.log("Error:", error);
        }
    }

    return{
        post
    }
})();