// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

const pow = (num, degree) => {
    if (degree === 0) return 1
    return num * pow(num, degree - 1)
}

console.log(pow(4,2))