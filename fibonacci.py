def fibonacci(n):
    if n < 2:
        return n
    firstNum = 0
    secondNum = 1
    fibNum = 0
    counter = 1
    while n > counter:
        fibNum = firstNum + secondNum
        firstNum = secondNum
        secondNum = fibNum
        counter += 1
        # print(counter)
    return fibNum
