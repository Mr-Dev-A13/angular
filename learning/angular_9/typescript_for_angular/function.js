var getInfo = function (name, age) {
    console.log("Info ".concat(name, ", ").concat(age));
};
getInfo("Joe", 30);
var getMultipleNumber = function (x, y) {
    if (typeof y === "string")
        y = Number(y);
    return x + y;
};
console.log(getMultipleNumber(10, "3"));
