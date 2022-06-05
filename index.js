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

const operate = function(a,b)
{
    let Symbol='/';
    if(Symbol=='+')
    {
        console.log(add(a,b));
    }
    else if(Symbol=='-')
    {
        console.log(subtract(a,b));
    }
    else if(Symbol=='*')
    {
        console.log(multiply(a,b));
    }
    else if(Symbol=='/')
    {
        console.log(divide(a,b));
    }
}
operate(1,2);

let miniScreenVal='';
let mainScreenVal='';
const setMiniScreen = function(miniScreenVal)
{
    const miniScreen = document.querySelector('#calcMiniScreen');
    miniScreen.textContent = miniScreenVal;
}
const setMainScreen = function(mainScreenVal)
{
    const mainScreen = document.querySelector('#calcMainScreen');
    mainScreen.textContent = mainScreenVal;
}

const numVal = function(e)
{
    let val = Number(e.target.innerText);
    mainScreenVal+=val;
    setMainScreen(mainScreenVal);
}
const symVal = function(e)
{
    let val = e.target.innerText;
    miniScreenVal+=mainScreenVal+val;
    setMiniScreen(miniScreenVal);
    mainScreenVal='';
    setMainScreen(mainScreenVal);
}

let a = null;
let b = null;

//7
const seven = document.querySelector('#seven');
seven.addEventListener('click',numVal);
//8
const eight = document.querySelector('#eight');
eight.addEventListener('click',numVal);
//9
const nine = document.querySelector('#nine');
nine.addEventListener('click',numVal);
///
const division = document.querySelector('#division');
division.addEventListener('click',symVal);

//4
const four = document.querySelector('#four');
four.addEventListener('click',numVal);
//5
const five = document.querySelector('#five');
five.addEventListener('click',numVal);
//6
const six = document.querySelector('#six');
six.addEventListener('click',numVal);
//*
const mul = document.querySelector('#mul');
mul.addEventListener('click',symVal);

//1
const one = document.querySelector('#one');
one.addEventListener('click',numVal);
//2
const two = document.querySelector('#two');
two.addEventListener('click',numVal);
//3
const three = document.querySelector('#three');
three.addEventListener('click',numVal);
//-
const minus = document.querySelector('#minus');
minus.addEventListener('click',symVal);

//.
const dot = document.querySelector('#dot');
dot.addEventListener('click',symVal);
//0
const zero = document.querySelector('#zero');
zero.addEventListener('click',numVal);
//=
const equal = document.querySelector('#equal');
equal.addEventListener('click',symVal);
//+
const plus = document.querySelector('#plus');
plus.addEventListener('click',symVal);

//clear
const clear = document.querySelector('#clear');
clear.addEventListener('click',()=>{
    miniScreenVal='';
    setMiniScreen(miniScreenVal);
    setMainScreen(0);
});