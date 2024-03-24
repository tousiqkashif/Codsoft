

var x = window.matchMedia("(max-width:600px)");

if(x.matches){




document.getElementById("bar").addEventListener("click", bar);
    document.getElementById("meno").style.display="block";


function bar(){
 document.getElementById("meno").style.display="block";
 document.getElementById("bar").style.display="none";
 document.getElementById("logo").style.display="none";

}

function closer(){
    document.getElementById("meno").style.display="none";
    document.getElementById("bar").style.display="block";
    document.getElementById("logo").style.display="block";
   }
}


window.addEventListener("resize", function(){
    location.reload();
})