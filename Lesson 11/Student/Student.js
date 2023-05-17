class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.daysLimit = 3 // Кол-во дней для посещений и оценок
        this.grades = [];
        this.presence = [];
    }

    // Метод для проверки свободных дней
    isEnoughDays(arr) {
        return arr.length < this.daysLimit
    }

    present(grade) {
        if (this.isEnoughDays(this.presence)) {
            this.grades.push(grade)
            this.presence.push(true)
        }
    }

    absent() {
        if (this.isEnoughDays(this.presence)) {
            this.grades.push(0)
            this.presence.push(false)
        }
    }

    summary() {
        // Считаем сумму оценок
        let result = []
        let totalGrade = this.grades.reduce((acc, val) => {
            return acc + val
        })

        // Считаем посещаемость
        let totalPresence = 0
        this.presence.forEach(value => {
            if (value) totalPresence++
        })

        // Сохраняем среднюю оценку и индекс посещаемости
        result.push(totalGrade / this.daysLimit)
        result.push(this.daysLimit / totalPresence)

        // Возвращаем результат
        if (result[0] >= 90 && result[1] >= 0.9) {
            return console.log('Молодец!')
        } else if (result[0] >= 90 || result[1] >= 0.9) {
            return console.log('Хорошо, но можно лучше.')
        } else {
            return console.log('Редиска!')
        }
    }

    // Ифно о студенте
    getStudentInfo(){
        console.log(`${this.lastName} ${this.firstName} ${this.birthYear}`)
        this.summary()
    }
}

const studentIvan = new Student('Иван', 'Иванов', 1992)
const studentJulia = new Student('Юлия', 'Макарова', 1991)
const studentStas = new Student('Станислав', 'Медников', 1993)

studentIvan.present(0)
studentIvan.present(0)
studentIvan.absent()
studentIvan.getStudentInfo()
console.log('\n')

studentJulia.absent()
studentJulia.absent()
studentJulia.absent()
studentJulia.getStudentInfo()
console.log('\n')

studentStas.present(100)
studentStas.present(100)
studentStas.present(100)
studentStas.getStudentInfo()