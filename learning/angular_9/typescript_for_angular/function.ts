const getInfo = (name: string, age: number): void => {
    console.log(`Info ${name}, ${age}`)
}

getInfo("Joe", 30);

const getMultipleNumber = (x: number, y: number | string): number => {
    if (typeof y === "string") y = Number(y);
    return x + y;
}

console.log(getMultipleNumber(10, "3"));