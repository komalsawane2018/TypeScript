console.log("======= Create Method Find Employees and Make it Overloading ===============");
function Employees(x, y) {
    if (x && typeof x === "number") {
        console.log('***************************************************************************');
        console.log("Datatype of Emp Id is number - Emp Id:".concat(x, "  and  Emp Name: ").concat(y));
    }
    else if (x && typeof x === "string") {
        console.log('***************************************************************************');
        console.log("Datatype of Emp Id is string - Emp Id:".concat(x, " and  Emp Name: ").concat(y));
    }
    else if (x && typeof x === "boolean") {
        console.log('***************************************************************************');
        console.log("Datatype of Emp Id is boolean - Emp Id:".concat(x, " and Emp Name: ").concat(y));
    }
}
Employees(18, "Riya");
Employees('Nine', "Arohi");
Employees(true, "Ritu");
