interface SayHello {
    sayHello: () => void
}

class User implements SayHello {
    constructor (public name, protected age) {}

    sayHello () {
        console.log(this.name + "Hello!");
    }
}
