
export default function deliver(){
    function browse(){
        
    }
    function list(messages){
        const listWrapper = document.createElement("ul");
        const messageList = messages.map((current) => {
            let messageItem = document.createElement("li");
            let messageName = document.createElement("p");
            let messageNumber = document.createElement("p");
            let messageBody = document.createElement("p");
            messageName.innerText = current["name"];
            messageNumber.innerText = current["number"];
            messageBody.innerText = current["message"];
            messageItem.appendChild(messageName);
            messageItem.appendChild(messageNumber);
            messageItem.appendChild(messageBody);
            listWrapper.appendChild(messageItem);
            return messageItem;
        });
        return listWrapper;
    }
    return{
        browse:browse,
        list:list
    }
}