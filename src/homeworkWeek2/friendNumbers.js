let getDivisorsOfNumbers = (number) => {
    let divisorsOfNumbers = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            divisorsOfNumbers.push(i);
        }
    }
    return divisorsOfNumbers;
}

let friendNumbers = (number1, number2) => {
    let divisorsOfFirstNumber = getDivisorsOfNumbers(number1);
    let divisorsOfSecondNumber = getDivisorsOfNumbers(number2);

    let sumDivisorsOfFirstNumber = divisorsOfFirstNumber.reduce((acc, p) => acc + p, 0);
    let sumDivisorsOfSecondNumber = divisorsOfSecondNumber.reduce((acc, p) => acc + p, 0);

    if (number1 == sumDivisorsOfSecondNumber && number2 == sumDivisorsOfFirstNumber) {
        console.log("Numbers are friends: " + number1 + ", " + number2)
    } else {
        console.log("Numbers are not friends: " + number1 + ", " + number2)
    }
}

friendNumbers(220, 284);