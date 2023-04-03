// Js에서는 재사용을 잘 하지 않아서 class의 사용성이 낮게 여겨짐

class Vehicle {
    constructor(maker, model, year, color) {
        this.maker = maker;
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
//  Java와 다른점 : 자료타입이 없어서 바로 getter 이름부터 선언
    getMaker() {
        return this.maker;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }
    getSpeed() {
        return this.speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`The ${this.maker} ${this.model} ${this.year} ${this.color} is now going ${this.speed}km/h.`)
    }
    brake(amount) {
        this.speed = Math.max(0, this.speed-amount);
        console.log(`The ${this.maker} ${this.model} ${this.year} ${this.color} is now going ${this.speed}km/h.`)
    }
    static getNumberOfWheels() {
        return 0;
    }
}

class Car extends Vehicle {
    constructor(maker, model, year, color, numDoors) {
        super(maker, model, year, color); // 부모의 생성자
        this.numDoors = numDoors;
    }
    static getNumberOfWheels() {
        return 4;
    }
}
class Truck extends Vehicle {
    constructor(maker, model, year, color, towingCapacity) {
        super(maker, model, year, color);
        this.towingCapacity = towingCapacity;
    }
    getTowingCapacity() {
        return this.towingCapacity;
    }
    static getNumberOfWheels() {
        return 6;
    }
}

const myCar = new Car('Hyunday', 'Sonata', 2021, 'silver', 4);
console.log(myCar);
myCar.accelerate(30);
myCar.brake(10);
console.log(Car.getNumberOfWheels());

const myTruck = new Truck('Kia', 'Sorento', 2022, 'red', 10000);
console.log(myTruck);
myTruck.accelerate(50);
myTruck.brake(10);
console.log(Truck.getNumberOfWheels());
ㅈ