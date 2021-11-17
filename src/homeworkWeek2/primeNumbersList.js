let isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

let primeNumbers = [];
for (let j = 0; j < 1000; j++) {
    if (isPrime(j)) {
        primeNumbers.push(j);
    }
}

console.log("Prime numbers (0-1000): " + primeNumbers)