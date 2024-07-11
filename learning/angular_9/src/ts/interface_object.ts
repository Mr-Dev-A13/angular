interface UserInterface {
    id?: any,
    name: string,
    age: number,
    logInfo: () => void
};

const user: UserInterface = {
    name: "Joe",
    age: 30,
    logInfo: function () {
        console.log(this.name, this.age);
    }
}
