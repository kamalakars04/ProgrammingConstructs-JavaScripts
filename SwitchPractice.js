// 1.Reading a single digit number
let number=Math.floor(Math.random()*10)%10;
console.log(number);
switch(number)
{
    case 0:
        console.log("Number is Zero");
        break;
    case 1:
        console.log("Number is One");
        break;
    case 2:
        console.log("Number is Two");
        break;
    case 3:
        console.log("Number is Three");
        break;
    case 4:
        console.log("Number is Four");
        break;
    case 5:
        console.log("Number is Finumbere");
        break;
    case 6:
        console.log("Number is Six");
        break;
    case 7:
        console.log("Number is Seven");
        break; 
    case 8:
        console.log("Number is Eight");
        break;  
    case 9:
        console.log("Number is Nine");
        break;     
}

// 2.Conversions 

const prompt = require('prompt-sync')();
console.log("enter 0 for feet to inches");
console.log("enter 1 for inches to feet");
console.log("enter 2 for feet to meters");
console.log("enter 3 for meters to feet");
let num = prompt("Enter your choice");
numberValue = prompt("Enter number for conversion");
switch(num)
{
    case "0":
        console.log(numberValue+" feet equal to "+numberValue*12+" inches");
        break;
    case "1":
        console.log(numberValue+" inches equal to "+numberValue/12+" feet");
        break;
    case "2":
        console.log(numberValue+" feet equal to "+numberValue*0.3048+" metres");
        break;
    case "3":
        console.log(numberValue+" meters equal to "+numberValue*3.28+" feet");
        break;
}