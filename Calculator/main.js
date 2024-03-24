var inputscreen = document.getElementById("screen");

document.getElementById("one").addEventListener("click", function(){

    inputscreen.value +=1;
});



document.getElementById("two").addEventListener("click", function(){

    inputscreen.value +=2;
});


document.getElementById("three").addEventListener("click", function(){

    inputscreen.value +=3;
});

document.getElementById("four").addEventListener("click", function(){

    inputscreen.value +=4;
});


document.getElementById("five").addEventListener("click", function(){

    inputscreen.value +=5;
});


document.getElementById("six").addEventListener("click", function(){

    inputscreen.value +=6;
});



document.getElementById("seven").addEventListener("click", function(){

    inputscreen.value +=7;
});


document.getElementById("eight").addEventListener("click", function(){

    inputscreen.value +=8;
});


document.getElementById("nine").addEventListener("click", function(){

    inputscreen.value +=9;
});



document.getElementById("clear").addEventListener("click", function(){

    inputscreen.value= "";
});


document.getElementById("mul").addEventListener("click", function(){

    inputscreen.value +="*";
   
});

document.getElementById("plus").addEventListener("click", function(){

    inputscreen.value +="+";
});



document.getElementById("min").addEventListener("click", function(){

    inputscreen.value +="-";
});


document.getElementById("div").addEventListener("click", function(){

    inputscreen.value +="/";
});


document.getElementById("equal").addEventListener("click", function(){

    inputscreen.value  = eval(inputscreen.value);
});