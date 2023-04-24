var math = prompt('Enter Maths Marks ');
console.log("Marks in Maths : ".concat(+math));
var physic = prompt("Enter Physics Marks");
console.log("Marks in Physics : ".concat(+physic));
var chemi = prompt("Enter Chemistry Marks");
console.log("Marks in Chemistry : ".concat(+chemi));
var totalMarks = (+math) + (+physic) + (+chemi);
console.log("Total Marks ".concat(totalMarks));
var average = totalMarks / 3;
console.log("Average of marks: ".concat(average));
if (average < 70) {
    console.log("Grade C ");
}
if (average > 70 && average < 90) {
    console.log("Grade B");
}
if (average > 90) {
    console.log(" Grade C ");
}
