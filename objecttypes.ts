
// Object Types and Type Aliases
type Point = {x: number, y: number}
let center : Point= {
    x :0,
    y: 0

};

let unit : Point = {
    x :1,
    y: 1

};
// any

let exampleAny : any
exampleAny ="  test   "
// console.log(exampleAny.trim());

// unkown

let exampleUnknown : unknown
exampleUnknown ="codemind"
if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim());    
}

