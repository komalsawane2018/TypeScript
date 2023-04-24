// abstract class Car {
//   // non abstract method  
//     Wheel() : string {
//         return '4 wheeler';
//     }

//     CheckAC() : string {
//         return 'Ac is available'
//     }
  
//     CallFacility() : string {
//         return 'Call facility supported';
//     }
// //  abstract method only Declaration
//     abstract Price() : number;
//     abstract getTotalSeats(): number;
//     abstract Color() : string ;
// }

// class Toyotaa extends Car {
//     Price(): number {
//        return 1000000;
//     }
//     getTotalSeats(): number {
//     return 5;
//     }
//     Color(): string {
//        return 'White';
//     }

// }

//  let toyotaa = new Toyota()

interface IHyundai{
    gps(): void;
}
class hyundaii implements IHyundai{

    gps(): void {
        console.log('GPS Supported');
         
        }
    }
    var objhyundai = new hyundaii()
    objhyundai.gps();

    class objToyota implements IHyundai{
        gps(): void {
            console.log(`GPS Not Supported`);
           
        }

    }
    var obj = new objToyota()
    obj.gps()
    
 console.log(`============= Interface =================================`);

interface ICar {

    gps:string;
    color: string;
    display():string;
}
class Hyundai implements ICar{
    gps: string;
    color: string;
    display(): string {
        throw new Error("Method not implemented.");
    }

}
 let hyundai = new Hyundai()
 console.log(`============= Hyundai Car =================================`);
 
 console.log(hyundai.gps=" GPS is Supported ");

 console.log(`=========== Toyota Car ===================================`);
  
 class Toyota implements ICar{
     gps: string;
     color: string;
     display(): string {
         throw new Error("Method not implemented.");
     }
 

 }
 let toyota = new Toyota()
 console.log(toyota.gps=" GPS is Not Supported ");

