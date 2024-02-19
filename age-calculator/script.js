import calculate from "./calculateAge.js";

const dateOfBirth = document.getElementById("inputted-dob");
const ageForm = document.getElementById("age-input");
const calculateButton = document.getElementById("calculate-button");
const calculatedAge = document.getElementById("calculated-age");

function attachClick(){
    calculateButton.addEventListener("click", (e) => {
        e.preventDefault();
        const calculated = calculate(formatDob(prepareDob()));
        displayResult(calculated);
    });
}
function handleClick(){
    attachClick();
}
function prepareDob(input){
    console.log(dateOfBirth.value);
    return dateOfBirth.value;
}
function formatDob(input){
    const formattedInput = input.split("/");
    const parsedInput = formattedInput.map((current) => { return parseInt(current)});
    return parsedInput;
}
function displayResult(result){
    calculatedAge.innerText = `Years: ${result.years} and Months: ${result.months} `;
}
handleClick();