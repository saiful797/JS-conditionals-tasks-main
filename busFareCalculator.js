/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age=20;
let ticket="student";
if(age<10){
    console.log("Travel is free for Children.");
}
else if( age<=30 && age>=10 && ticket=="student"){
    console.log(("Your Ticket Fare is :"));
    console.log(800*(50/100));
}