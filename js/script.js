//console.log(document.querySelectorAll(".inp"));
//console.log(document.querySelectorAll(".inp")[0].value);

function f() {
    var s=0;
    for(var i=0; i<document.querySelectorAll(".inp").length; i++)
    {
        s+=parseInt(document.querySelectorAll(".inp")[i].value);
    }
    document.getElementById("perc").innerText = "percentage: "+ s/4.8 + "%";
    document.getElementById("perc").style.fontSize = "2rem";
}