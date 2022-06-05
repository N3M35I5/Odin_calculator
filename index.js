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

const operate = function(a,b,Symbol)
{
    if(Symbol=='+')
    {
        return(add(a,b));
    }
    else if(Symbol=='-')
    {
        return(subtract(a,b));
    }
    else if(Symbol=='*')
    {
        return(multiply(a,b));
    }
    else if(Symbol=='/')
    {
        return(divide(a,b));
    }
}

let a = null;
let b = null;
let oper=null;
let miniScreenVal='';
let mainScreenVal='';

//function to update the top small screen
const setMiniScreen = function(miniScreenVal)
{
    const miniScreen = document.querySelector('#calcMiniScreen');
    miniScreen.textContent = miniScreenVal;
}
//function to update the bottom big screen
const setMainScreen = function(mainScreenVal)
{
    const mainScreen = document.querySelector('#calcMainScreen');
    mainScreen.textContent = mainScreenVal;
}
//function to update val when clicking on numbers.
const numVal = function(e)
{
    let val = e.target.innerText;   
    if(oper)
    {
        if(b==null)
        {
            mainScreenVal=val;
            setMainScreen(mainScreenVal);
            b=Number(val);
        }
        else
        {
            mainScreenVal+=val;
            setMainScreen(mainScreenVal);
            b=Number(mainScreenVal);
        }
    }
    else
    {
        if(a==null)
        {
            mainScreenVal=val;
            setMainScreen(mainScreenVal);
            a=Number(mainScreenVal);
        }
        else
        {
            mainScreenVal+=val;
            setMainScreen(mainScreenVal);
            a=Number(mainScreenVal);
        }
    }
    
}
const symVal = function(e)
{
    let val = e.target.innerText;
    if(val==='=')//output result
    {
        if(b==null)//to handle special case where value needs to be loaded from main screen.
        {
            b=Number(mainScreenVal);
        }
        miniScreenVal+=b+'=';
        setMiniScreen(miniScreenVal);
        res=operate(a,b,oper);
        mainScreenVal=res;
        setMainScreen(mainScreenVal);
        a=res;
        b=null;
        miniScreenVal='';
        oper=null;
    }
    else if (val=='.')
    {
        mainScreenVal+='.';
        setMainScreen(mainScreenVal);
    }
    else
    {
        if(b==null)//increment operator to miniscreen if b is not present
        {
            miniScreenVal+=mainScreenVal+val;
            setMiniScreen(miniScreenVal);
            oper=val;
        }
        else// if b is present perform the operation of pervious operator and display it in main screen.
        {
            miniScreenVal+=b+val;
            setMiniScreen(miniScreenVal);
            res=operate(a,b,oper);
            mainScreenVal=res;
            setMainScreen(mainScreenVal);
            a=res;
            b=null;
            oper=val;
        }
    }
}

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
    //initialize everything
    miniScreenVal='';
    setMiniScreen(miniScreenVal);
    setMainScreen(0);
    a=null;
    b=null;
    oper=null;
    mainScreenVal='';
});

//delete
const del = document.querySelector('#delete');
del.addEventListener('click',()=>{
    if(mainScreenVal.length<2)
    {
        mainScreenVal='';
        setMainScreen(0);
    }
    else
    {
        console.log(mainScreenVal);
        mainScreenVal=mainScreenVal.slice(0,-1);
        setMainScreen(mainScreenVal);
        if(b==null)
            a=Math.floor(a/10);
        else
            b=Math.floor(b/10);
    }
    
});