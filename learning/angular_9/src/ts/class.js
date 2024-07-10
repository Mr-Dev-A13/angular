var Server = /** @class */ (function () {
    // constructor (name: string, ip: number) {
    //     this.name = name;
    //     this.ip = ip;
    // }
    // ===> New
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // ===> Old
        // public name: string;
        // protected ip: number;
        this.status = "working";
    }
    Server.prototype.turnOn = function () {
        this.status = "working";
    };
    Server.prototype.turnOff = function () {
        this.status = "offline";
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = "1.3.5";
    return Server;
}());
var server = new Server("AWS", 1234);
