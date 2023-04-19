var center = {
    x: 0,
    y: 0
};
var unit = {
    x: 1,
    y: 1
};
// any
var exampleAny;
exampleAny = "  test   ";
// console.log(exampleAny.trim());
// unkown
var exampleUnknown;
exampleUnknown = "codemind";
if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim());
}
