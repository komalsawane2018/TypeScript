var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        throw new Error("Method not implemented.");
    };
    return Product;
}());
var objProduct = new Product();
console.log(objProduct.name = "TATA");
// console.log(`=========== 2nd Example====================`);
// interface IPrint {
//     print(): void;// declaration 
// }
// class Excel implements IPrint {
//     print(): void {
//         console.log('EXCEL')
//     }
// }
// class PDF implements IPrint {
//     print(): void {
//         console.log('PDF')
//     }
// }
// class Doc implements IPrint {
//     print(): void {
//         console.log('Doc')
//     }
// }
// let objectExcel = new Excel();
// objectExcel.print();
