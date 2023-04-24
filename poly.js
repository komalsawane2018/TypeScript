function doubleMe(x) {
    if (typeof x === "number") {
        console.log(x * 2);
    }
    else if (typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
        // map creates a new array 
    }
}
doubleMe(2);
doubleMe("Rocky");
doubleMe(["a"]);
