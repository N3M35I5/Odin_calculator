const add = function(a,b)
{
    return a+b;
}
const subtract = function(a,b)
{
    return a-b;
}
const multiply = function(a,b)
{
    return a*b;
}
const divide = function(a,b)
{
    if(b==0)
    {
        b=prompt('Cannot divide by zero, \nPlease enter a new value.');
    }
    return a/b;
}
console.log(divide(1,0));