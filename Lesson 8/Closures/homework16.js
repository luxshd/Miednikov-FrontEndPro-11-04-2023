// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function getSum() {
    let result = 0
    return function (val) {
        result += val
        console.log(result)
        return result
    }
}

const sum = getSum()
sum(3)
sum(5)
sum(20)