console.log("======= Create Object using Class=============================");
var Employee = /** @class */ (function () {
    function Employee(empname, empid, empdept) {
        this.empname = empname;
        this.empid = empid;
        this.empdept = empdept;
        this.empname = empname;
        this.empid = empid;
        // this.empdept = empdept;
    }
    return Employee;
}());
var objEmp = new Employee("Komal", 18);
if ('empdept' != undefined) {
    console.log("Name: ".concat(objEmp.empname, ", ID: ").concat(objEmp.empid, ", Dept: ").concat(objEmp.empdept));
}
console.log("========= 2nd Use of Optional Parameter ===============================");
function show(name, id, depart) {
    console.log("Employee Name :", name);
    console.log("Employee ID :", id);
    if (depart != undefined) {
        console.log('This is the optional parameter = isTransportAvail:', depart);
    }
}
show("Latesh", 20, true);
console.log("========= Use of Optional Parameter ==================================");
show("Komal", 46);
