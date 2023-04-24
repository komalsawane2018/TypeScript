console.log(`======= Create Object using Class=============================`);

class Employee {

    constructor(public empname: string,public empid:number,public empdept?:string ) {
        this.empname = empname;
        this.empid = empid;
        // this.empdept = empdept;
        }
         
}
const objEmp = new Employee ("Komal",18)

if ('empdept' != undefined) {
    console.log(`Name: ${objEmp.empname}, ID: ${objEmp.empid}, Dept: ${objEmp.empdept}`);   
}
 
 

 console.log(`========= 2nd Use of Optional Parameter ===============================`);

function show(name: string,id:number,depart?:boolean) {
    console.log("Employee Name :", name);
    console.log("Employee ID :",id);
    if (depart != undefined) {
     console.log('This is the optional parameter = isTransportAvail:',depart);
        
    }
    }
    show("Latesh",20,true)
    
    console.log(`========= Use of Optional Parameter ==================================`);
    
    show("Komal",46)




 
 
 
 