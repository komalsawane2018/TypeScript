// abstract class Car {
//   // non abstract method  
//     Wheel() : string {
//         return '4 wheeler';
//     }
var hyundaii = /** @class */ (function () {
    function hyundaii() {
    }
    hyundaii.prototype.gps = function () {
        console.log('GPS Supported');
    };
    return hyundaii;
}());
var objhyundai = new hyundaii();
objhyundai.gps();
var objToyota = /** @class */ (function () {
    function objToyota() {
    }
    objToyota.prototype.gps = function () {
        console.log("GPS Not Supported");
    };
    return objToyota;
}());
var obj = new objToyota();
obj.gps();
console.log("============= Interface =================================");
var Hyundai = /** @class */ (function () {
    function Hyundai() {
    }
    Hyundai.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return Hyundai;
}());
var hyundai = new Hyundai();
console.log("============= Hyundai Car =================================");
console.log(hyundai.gps = " GPS is Supported ");
console.log("=========== Toyota Car ===================================");
var Toyota = /** @class */ (function () {
    function Toyota() {
    }
    Toyota.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return Toyota;
}());
var toyota = new Toyota();
console.log(toyota.gps = " GPS is Not Supported ");
