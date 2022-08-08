// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.
function miniutes(hours) {
    let miniutes = hours * 60;
    return miniutes;
}

const hours = 2;


const convertedMiniutes = miniutes(hours);
console.log(hours, ' hours is equal to ', convertedMiniutes , 'miniutes');
