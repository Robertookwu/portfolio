export default (function(){

    async function upload(formData){
        try{
            const response = await fetch("",{
                method:"PUT",
                body: formData
            });
            const result = await response.json();
            console.log("Success:", result);
        }catch(error){
            console.log("Error:", error);
        }
    }

    return{
        upload
    }
})();