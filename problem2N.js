// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.
function findLeapYear(years){
    let arrayOfLearpYear = [];
    for(let i = 0; i < years.length; i++){
        console.log(years[i]);
        if((0 == years[i] % 4) && (0 != years[i] % 100) || (0 == years[i] % 400)){
            arrayOfLearpYear.push(years[i]);
        }
    }
    return arrayOfLearpYear;
   
}


const leapYear = findLeapYear([2023,2024,2025,2028,2030]);

console.log(leapYear);


