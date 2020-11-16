// 1.Displaying Max and min among 5 numbers
numbers=[];
for(i=0;i<5;i++)
{
 numbers[i]=Math.floor((Math.random() * 1000));
 console.log(numbers[i]);
}
let max=numbers[0];
let min=numbers[0];
for(i=1; i<numbers.length; i++)
{
    if(max<numbers[i])
        max=numbers[i];
    if(min>numbers[i])
        min=numbers[i];
}
console.log("Max no is "+max);
console.log("Min no is "+min);

// 2.checking date
var startDate=new Date();

startDate.setDate(20);
startDate.setMonth(3);
startDate.setFullYear(2020);
var endDate=new Date();
endDate.setMonth(6);
endDate.setDate(20);
endDate.setFullYear(2020);

// Take date from user
var d=new Date();
const prompt = require('prompt-sync')();
const month = prompt('Enter month');
d.setMonth(month);
const date = prompt('Enter date');
d.setDate(date);
d.setFullYear(2020);

// Compare dates
if(d>startDate&&d<endDate)
console.log("true : Date lies in given range");
else
console.log("false : Date doesnot lie in given range")

// 3.checking for leap year
var leapYear= prompt('enter year to check for leap year');
leapyear = new Date(leapYear);
if(leapYear%4==0)
{
    if(leapYear%100 ==0 && leapYear%400 == 0)
    console.log("leap year");
    else if(leapYear%100 == 0)
    console.log("not leap year");
    else
    console.log("leap year");
}
else
console.log("not a leap year");

// 4.coin toss
let v=Math.floor(Math.random()*10)%2;
if(v==0)
console.log("Heads");
else
console.log("tails");

// 5.Week day
let day=Math.floor(Math.random()*10)%7;
if(day==0)
console.log("Day is sunday");
else if(day==1)
console.log("Day is Monday");
else if(day==2)
console.log("Day is tuesday");
else if(day==3)
console.log("Day is wednesday");
else if(day==4)
console.log("Day is Thursday");
else if(day==5)
console.log("Day is Friday");
else if(day==6)
console.log("Day is saturday");

// 6.Operations on numbers
let a=5,b=6,c=7;
let operations=[];
operations[0]=a+(b*c);
operations[1]=(a%b)+c;
operations[2]=c+(a/b);
operations[3]=(a*b)+c;
let maximum=operations[0],minimum=operations[0];
for(i=1; i<operations.length; i++)
{
    if(maximum<operations[i])
        maximum=operations[i];
    if(minimum>operations[i])
        minimum=operations[i];
}
console.log("Maximum value is "+maximum);
console.log("Minimum value is "+minimum);

// 7.Displaying ones tens hundreds in a number
let value =prompt("Enter a number to display ones tens and hundreds");
let j=0;
let number=[];
while(value >= 1)
{
    if(value<10)
    number[j]=Math.floor(value);
    else
    number[j]=Math.floor(value%10);
    value=value/10;
    j++;
}
if(number.length==1)
console.log(number[0]+"* ones");
else if(number.length==2)
console.log(number[0]+" * ones "+number[1]+"* tens ");
else if(number.length==3)
console.log(number[0]+" * ones "+number[1]+" * tens "+number[2]+" * hundreds");
else if(number.length==4)
console.log(number[0]+" * ones "+number[1]+" * tens "+number[2]+" * hundreds"+number[3]+" *thousands ");