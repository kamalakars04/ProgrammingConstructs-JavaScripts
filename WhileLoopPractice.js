// 1. Print powers of 2 till 256 is reached
const AskUser = require('prompt-sync')();
let number = Number(AskUser("Enter number to print its power"));
let powers = function(number)
{
    let result = 1,i=0;
    while(result < 256 && i<=number)
    {
        if(i != 0)
            result = 2*result;
        console.log(result);
        i++;
    }
}
powers(number);