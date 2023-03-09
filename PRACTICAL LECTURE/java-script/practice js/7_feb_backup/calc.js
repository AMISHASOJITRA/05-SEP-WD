function btn()
{
    var x=parseInt(document.getElementById("a").value);
    var y=parseInt(document.getElementById("b").value);
    var z=x+y;

    document.getElementById("result").innerHTML="Addition of a and b is:"+z;


    if(x="")
    {
        alert("please enter the value proper");
    }
}
function btn1()
{
    var x=parseInt(document.getElementById("a").value);
    var y=parseInt(document.getElementById("b").value);
    var z=x-y;

    document.getElementById("result").innerHTML="Sub of a and b is:"+z;
}