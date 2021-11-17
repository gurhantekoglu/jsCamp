let getDivisorsOfNumbers = (number) => {
    let divisorsOfNumbers = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisorsOfNumbers.push(i);
        }
    }
    return divisorsOfNumbers;
}

let perfectNumbers = [];
for (let j = 1; j < 1000; j++) {
    let divisorsOfTheNumber = getDivisorsOfNumbers(j);
    let total = divisorsOfTheNumber.reduce((acc, n) => acc + n, 0);

    if (total == j) {
        perfectNumbers.push(j);
    }   
}

console.log("Perfect numbers (0-1000): " + perfectNumbers)