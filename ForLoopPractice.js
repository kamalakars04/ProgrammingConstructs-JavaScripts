// Practice problem 1 for powers of 2
// function to calculate power
const prompt = require('prompt-sync')();
let number = 0;
number = prompt("Enter number to get its powers of 2");
let powersOfTwo = function(a)
{
    let powerResult=1;
    // loop to iterate upto a and calculate power
    for(let j=0;j<=a;j++)
    {
        if(j !=0)
            powerResult= 2*powerResult;
        console.log(powerResult);
    }
    return powerResult;
}
powersOfTwo(number);

// 2.Print nth harmonic number
number = prompt("Enter number to get its nth harmonic");
let harmonic = 0.00000;
for(let i=1;i<= number;i++)
{
        harmonic+= 1/i;
}
 console.log("Harmonic sum is: "+harmonic);

 // 3.Check if number is prime
 let input = prompt("Enter number to check for prime");
 let isPrime = function (number)
{ 
    for(let i=2;i<=number/2;i++)
    {
        if(number%i==0)
        {
            return false;
        }
    }
    return true;
}
console.log("The given number is prime : "+ isPrime(Number(input)));

// 4.Get prime numbers in a given range
let endNumber = 0;
number = Number(prompt("Enter start number of range to check for prime"));
endNumber = Number(prompt("Enter end number of range to check for prime"));
let primeNumbers = function(a,b)
{
    let count = 0;
    let i =0;
    console.log("The prime numbers in given range are : ");
    for(i = a;i<=b;i++)
    {
        if(isPrime(i))
        {
            console.log(i);
            count++;
        }
    }
    if(count == 0)
    console.log("Zero");
}
primeNumbers(number,endNumber);

// 5.Calculate factorial of given number
number = Number(prompt("Enter number to calculate factorial"));
let factorial = 1;
for(let i=1;i<=number;i++)
{
    factorial= factorial*i;
}
console.log(factorial);

// 6.Calculate factors
function primeFactorize(number)
{let factors=[];
    for(k=1;k<=number/2;k++)
    {
        if(number%k===0)
        {
            factors.push(k);
        }
    }
    for(j=0;j<factors.length;j++)
    {
        console.log(factors[j]+" ");
    }
}
number = Number(prompt("Enter number to calculate its factors"));
primeFactorize(number);

