var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank(name, branch, id) {
        this.name = name;
        this.branch = branch;
        this.id = id;
    }
    return Bank;
}());
var objBank = new Bank("Bank of Baroda", "Hadapsar", 23);
console.log(objBank);
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super.call(this, "Mumbai", "Maharashtra", 401) || this;
    }
    return Address;
}(Bank));
var objaddress = new Address();
console.log(objaddress);
console.log("=========== Original Array=============================");
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(inputArr);
// console.log(`======= After Removing Duplicate Items from Array ==========`);
// let newArray:Array<number> = []
// inputArr.forEach((element)=>{
//     if (newArray.includes(element)=== false) {
//         newArray.push(element)
//     }
// })
// console.log(newArray);
var ar = inputArr.filter(function (element, index) {
    return inputArr.indexOf(element) == index;
});
console.log(ar);
// function removeDuplicate(array:any) {
// let newArray = new Set(array)
// newArray.add(array)
// console.log(`======= After Removing Duplicate Items from Array ==========`);
// console.log(newArray);
// }
// removeDuplicate(inputArr)
