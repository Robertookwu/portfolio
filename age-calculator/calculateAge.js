
export default function calculate(dob){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();
    
    return {years:years(year, month, dob), months:months(month,day,dob)};
}
function years(year, month, dob){
    return yearsCounted(year,month,dob);
}
function yearsDifference(year, dob){
    const yearDifference = year - dob[2];
    return yearDifference;
}
function yearQualify(month, dob){
    return month > dob[0] ? true : false;
}
function yearsCounted(year,month,dob){
    return yearQualify(month, dob) ? yearsDifference(year, dob) : yearsDifference(year,dob) - 1;
}
function monthsCounted(month,day,dob){
    return monthQualify(month,day,dob) ? true: false;
}
function monthQualify(month,day,dob){
    return month >= dob[0] ? dayGreaterThan(day,dob): false;
}
function months(month,day,dob){
    return monthsCycle(month,dob) & monthsCounted(month,day,dob) ? (month - dob[0]) : (month + (12 - dob[0]) );
}
function monthsCycle(month,dob){
    const monthsPast = month - dob[0];
    return monthsPast >= 0 ? true : false;
}
function dayGreaterThan(day,dob){
   return day => dob[1]? true: false;
}