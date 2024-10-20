class Server {
    static VERSION = "1.3.5";
    private status: string = "working";

    // ===> Old
    // public name: string;
    // protected ip: number;

    // constructor (name: string, ip: number) {
    //     this.name = name;
    //     this.ip = ip;
    // }

    // ===> New
    constructor (public name: string, protected ip: number) {}

    protected turnOn () {
        this.status = "working";
    }

    public turnOff () {
        this.status = "offline";
    }

    public getStatus (): string {
        return this.status;
    }
}

const server: Server = new Server("AWS", 1234);