const fibonacci = (num) => {
    if (num < 2){
        return num
    }
    let counter = 1;
    let firstNum = 0;
    let secondNum = 1;
    let fibNum;
    while (num > counter){
        fibNum = firstNum + secondNum
        firstNum = secondNum
        secondNum = fibNum
        // console.log(fibNum)
        counter ++
    }
    return fibNum
}

module.exports = {fibonacci}