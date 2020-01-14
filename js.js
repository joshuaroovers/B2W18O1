
var display = 1




function function1()
{
    document.getElementById("slider").style.transform = "translateX(0px)"
    ustoo()

    document.getElementById("button1").style.backgroundColor = "rgb(235, 235, 235)"
    document.getElementById("button2").style.backgroundColor = "rgb(163, 163, 163)"
    document.getElementById("button3").style.backgroundColor = "rgb(163, 163, 163)"

}
 function function2()
{
    document.getElementById("slider").style.transform = "translateX(-33.33%)"
    ustoo()

    document.getElementById("button1").style.backgroundColor = "rgb(163, 163, 163)"
    document.getElementById("button2").style.backgroundColor = "rgb(235, 235, 235)"
    document.getElementById("button3").style.backgroundColor = "rgb(196, 196, 196)"
    
}
function function3()
{
    document.getElementById("slider").style.transform = "translateX(-66.66%)"
    ustoo()

    document.getElementById("button1").style.backgroundColor = "rgb(163, 163, 163)"
    document.getElementById("button2").style.backgroundColor = "rgb(163, 163, 163)"
    document.getElementById("button3").style.backgroundColor = "rgb(235, 235, 235)"
    
}
function ustoo()
{
    document.getElementById("mainbalk").style.transform = "translateX(0px)"
    document.getElementById("mainbalk").style.zIndex = "20"
    document.getElementById("moveme").style.transform = "translateX(0px)"
}