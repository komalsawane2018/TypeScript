

console.log(`======= Create Method Find Employees and Make it Overloading ===============`);

 function Employees(x:string,y:string);
 function Employees(x:number,y:string);
 function Employees(x:boolean,y:string);
    
 function Employees(x:any,y:string) {
 if (x && typeof x ==="number") {
console.log('***************************************************************************');
console.log(`Datatype of Emp Id is number - Emp Id:${x}  and  Emp Name: ${y}`);
    }
    
    else if (x && typeof x==="string"){
console.log('***************************************************************************');
    
console.log(`Datatype of Emp Id is string - Emp Id:${x} and  Emp Name: ${y}`);
}
else if (x && typeof x=== "boolean") {
console.log('***************************************************************************');
console.log(`Datatype of Emp Id is boolean - Emp Id:${x} and Emp Name: ${y}`);
    
}
}
Employees(18,"Riya")

Employees('Nine',"Arohi")

Employees(true,"Ritu")
