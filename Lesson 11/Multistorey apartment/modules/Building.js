export class Building {
    constructor(apartmentsLimit) {
        this.apartments = []
        this.apartmentsLimit = apartmentsLimit
        console.log(`House with limit of ${apartmentsLimit} apartments was successfully built.\n\n`)
    }

    addApartment(apartment){
        const apartmentsCount = this.apartments.length;

        // Проверка на лимит квартир и проверка на наличие такой квартиры в массиве
        if((apartmentsCount < this.apartmentsLimit) && !this.apartments.includes(apartment)){
            this.apartments.push(apartment)
        } else {
            return console.log(`To much apartments or this apartment is already in this building.\n\n`)
        }
    }
}