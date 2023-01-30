

const sayHelloTo = (name) => {
    if (typeof name == typeof Number) {
        console.log("Your numbers dont add up");
    }
}

class App {
    constructor(port) {
        this.port = port;
    }

    start() {
        console.log(`starting web app on port ${this.port}`)
    }
}

var app = new App(1000)

app.start();

console.log("Hello, world!");

