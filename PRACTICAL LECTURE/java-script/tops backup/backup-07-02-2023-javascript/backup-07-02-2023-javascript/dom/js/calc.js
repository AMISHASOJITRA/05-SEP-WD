function stl()
{
    document.getElementById("btn").style="width:250px; height:auto;padding:18px; margin-left:25%;background-color:red; color:white;  border:none; border-radius:5px";
    
    document.getElementById("btn1").style="width:250px; height:auto;padding:18px; margin-left:12%;background-color:green; color:white;  border:none; border-radius:5px";
}

function clc()
{
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var result=n1+n2;
    document.getElementById("res").innerHTML="Additions of numbers is :"+result;
}

function subs()
{
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var result=n1-n2;
    document.getElementById("res").innerHTML="Substraction of numbers is :"+result;
}