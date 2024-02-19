
export default function find(){
    function mark(contact){
        contact["contacted"] = true;
    }
    function findContactByName(name){
        const stored = getList();
        const formatted = stored.split("|");
        const parsed = formatted.map((current) => {
            return JSON.parse(current);
        });
        const cleanedParsed =  parsed.slice(1);
        const result = cleanedParsed.map((current) => {
           return name.toLowerCase() == current["name"].trim().toLowerCase() ? current : false;
        });
        let accumulator = [];
        return result.reduce((accumulator, current) =>{
             current != false ? accumulator.push(current): false;
             return accumulator; 
        }, []);
    }
    function findContactByNumber(number){
        const stored = getList();
        const formatted = stored.split("|");
        const parsed = formatted.map((current) => {
            return JSON.parse(current);
        });
        const cleanedParsed =  parsed.slice(1);
        const result = cleanedParsed.map((current) => {
            const numbersSplit = current["number"].split("-");
            const numbersJoined = (numbersSplit[0].trim() + (numbersSplit[1].slice(1,-1)) + numbersSplit[2] + numbersSplit[3]);
           return number == numbersJoined.trim() ? current : false;
        });
        let accumulator = [];
        return result.reduce((accumulator, current) =>{
             current != false ? accumulator.push(current): false;
             return accumulator; 
        }, []);
    }
    function findAllMarked(){
        const stored = getList();
        const formatted = stored.split("|");
        const parsed = formatted.map((current) => {
            return JSON.parse(current);
        });
        const cleanedParsed =  parsed.slice(1);
        const result = cleanedParsed.map((current) => {
           return (current["contacted"]) ? current : false;
        });
        let accumulator = [];
        return result.reduce((accumulator, current) =>{
             current != false ? accumulator.push(current): false;
             return accumulator; 
        }, []);
    }
    function findAllUnMarked(){
        const stored = getList();
        const formatted = stored.split("|");
        const parsed = formatted.map((current) => {
            return JSON.parse(current);
        });
        const cleanedParsed =  parsed.slice(1);
        const result = cleanedParsed.map((current) => {
           return (current["contacted"])== undefined ? current : false;
        });
        let accumulator = [];
        return result.reduce((accumulator, current) =>{
             current != false ? accumulator.push(current): false;
             return accumulator; 
        }, []);
    }
    function isStored(){
        return localStorage.getItem("contact-messages") != undefined ? true : false;
    }
    function getList(){
        return localStorage.getItem("contact-messages");
    }

    return {
        mark:mark,
        findContactByName:findContactByName,
        findContactByNumber:findContactByNumber,
        findAllMarked:findAllMarked,
        findAllUnMarked:findAllUnMarked,
        isStored: isStored
    };
}

