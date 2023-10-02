class Car {
    constructor(model, year, color, mileage, fuelType, stickShift, paymentMethod, price) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage; 
        this.fuelType = fuelType;
        this.stickShift = stickShift;
        this.paymentMethod = paymentMethod;
        this.price = price;
        this.adjustPriceBasedOnPaymentMethod();
    }

    adjustPriceBasedOnPaymentMethod() {
        if (this.paymentMethod !== "cash"){
            this.price = this.price * 1.25;
        }
    }

    newMileage(mileage){
        this.mileage = mileage;
    }    
}

const car1 = new Car("tracker", 2021, "red", 36040, "gas", false, "cash", 100000);
const car2 = new Car("tracker", 2021, "red", 36040, "gas", false, "loan", 100000);

console.log(car1);
car2.newMileage(40000);
console.log(car2);