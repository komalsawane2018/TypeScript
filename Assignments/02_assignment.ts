console.log(`=========1st. Class with Constructor===============`);

class Bank {

    public name:string  
    public branch: string 
    public id:number
    constructor(name:string, branch:string, id:number) {
       this.name = name
       this.branch = branch
       this.id = id 
}
}
let objBank = new Bank("Bank of Baroda", "Hadapsar",23)
console.log(objBank);

class Address extends Bank{
    
    constructor() {
        super("Mumbai","Maharashtra",401);
        
    }
}

let objaddress = new Address()
console.log(objaddress);
 


console.log(`===========2nd. Original Array=============================`);

var inputArr = [1,2,2,4,5,4,7,8,7,3,6]
console.log(inputArr);
console.log(`======= After Removing Duplicate Items from Array ==========`);
let newArray:Array<number> = []
inputArr.forEach((element)=>{
    if (newArray.includes(element)=== false) {
        newArray.push(element)
    }
})
console.log(newArray);

console.log(`=========1st. Class with Constructor===============`);

class Person{
    private fName:string = "Komal"
    private age:number = 30

public get name() : string {
    return this.fName
}

}
let objPerson = new Person()
console.log(objPerson.name);



