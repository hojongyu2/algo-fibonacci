function recursiveFibonacci (num) {
    if (num < 2){
        return num
    }else {
        return recursiveFibonacci(num -1) + recursiveFibonacci(num - 2)
    }
}

console.log(recursiveFibonacci(7))