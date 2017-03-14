/**
 * Created by Aspha9 on 14/03/2017.
 */


/** Classes allow us to create 'blueprints' for objects
 *  In Angular 2 per esempio usiamo molte classi.
 *  Per creare Components, Services, Directives, Pipes ...
 * */

// Esempio di classe

class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Creare, instanziare un oggetto da una classe

let car = new Car(5);
car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());