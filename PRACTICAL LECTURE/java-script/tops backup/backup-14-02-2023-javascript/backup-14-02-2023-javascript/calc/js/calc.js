// for clear the  values 
function clr()
{
    document.getElementById("result").value="";
} 
// display input values 
function display(v)
{
    document.getElementById("result").value+=v;
}

//remove single values  

function clr1()
{
    var a=document.getElementById("result").value;
    document.getElementById("result").value=a.slice(0,-1);
}



// result calculate here
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=document.getElementById("result").value;
    x=eval(y);
    document.getElementById("result").value=x;
}
