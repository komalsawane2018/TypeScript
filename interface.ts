

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;

    display(): number; //only declaration 
}

class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    display(): number {
        throw new Error("Method not implemented.");
    }

}
let objProduct = new Product();
console.log(objProduct.name = "TATA");



console.log(`=========== 2nd Example====================`);


interface IPrint {
    print(): void;// declaration 
}


class Excel implements IPrint {

    print(): void {
        console.log('EXCEL')
    }
}

class PDF implements IPrint {
    print(): void {
        console.log('PDF')
    }
}

class Doc implements IPrint {
    print(): void {
        console.log('Doc')
    }
}

let objectExcel = new Excel();
objectExcel.print();
