// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.



function findOddSum(numbers) {
    console.log('Odd numbers are: ')
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 !== 0){
            const element = numbers[i];
            sum = sum + element;
            console.log( element);
        }
    }
    console.log('Sum of odd numbers : ');
    return sum;
}
const numbers =  [5, 7, 8, 10, 45, 30];
console.log(findOddSum(numbers));