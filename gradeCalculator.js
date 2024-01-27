/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let subjectMarks=95;

if(subjectMarks<59){
    console.log("You grade is F.");
}

else if(subjectMarks>=60 && subjectMarks<=69){
    console.log("You grade is D.");
}
else if(subjectMarks>=70 && subjectMarks<=79){
    console.log("You grade is C.");
}
else if(subjectMarks>=80 && subjectMarks<=89){
    console.log("You grade is B.");
}
else if(subjectMarks>=90 && subjectMarks<=100){
    console.log("You grade is A.");
}