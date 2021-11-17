let findPrime = (...numbers) => {
    numbers.map((i) => {
        let counter = 0;
        for (let j = 2; j < i / 2; j++) {
            if (i % j == 0) {
                counter++
            }
        }
        if (counter == 0 && i > 1 || i == 2) {
            console.log(`${i} is prime number.`)
        } else {
            console.log(`${i} is not prime number.`)
        }
    })
}

findPrime(-1, 0, 1, 2, 3, 4, 5)