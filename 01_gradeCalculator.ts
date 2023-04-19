
var math = prompt('Enter Maths Marks ')!
console.log(`Marks in Maths : ${+ math}`);
var physic = prompt("Enter Physics Marks")!
 console.log(`Marks in Physics : ${+physic}`);
var chemi = prompt("Enter Chemistry Marks")!
console.log(`Marks in Chemistry : ${+chemi}`);
var totalMarks : number = (+math)+(+physic)+(+chemi);
console.log(`Total Marks ${totalMarks}`);

var average : number = totalMarks/3;
console.log(`Average of marks: ${average}`);

if (average < 70) {
    console.log("Grade C ");
    }
if (average > 70 && average < 90 ) {
    console.log("Grade B");
}
if (average > 90) {
    console.log(" Grade C ");
}