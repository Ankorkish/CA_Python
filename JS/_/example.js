function plusOne(digits){
    for (let i = digits.length - 1; i >= 0; i--){
        digits[i]++
        if (digits[i] < 10){
            return digits
        }
        digits[i] = 0
    }

    digits.splice(0, 0, 1)

    return digits
}

console.log(plusOne([9,9,9]))