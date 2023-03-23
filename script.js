function addFunction(num1,num2){
    var num1 =  document.getElementById("num1").value;    
    var num2 = document.getElementById("num2").value;
    var add = +num1 + +num2;
    document.getElementById("ans").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + add + ".";
}

function subFunction(num1, num2){
    var num1 = document.getElementById("num1").value;    
    var num2 = document.getElementById("num2").value;
    var sub = num1-num2;
    document.getElementById("ans").innerHTML = "The difference between " + num1 + " and " + num2 + " is " + sub + ".";
}

function multFunction(num1, num2){
    var num1 = document.getElementById("num1").value;    
    var num2 = document.getElementById("num2").value;
    var mult = num1*num2;
    document.getElementById("ans").innerHTML = "The product of " + num1 + " and " + num2 + " is " + mult + ".";
}

function dvdFunction(num1, num2){
    var num1 = document.getElementById("num1").value;    
    var num2 = document.getElementById("num2").value;
    var dvd = num1/num2;
    document.getElementById("ans").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + dvd + ".";
}

function modFunction(num1, num2){
    var num1 = document.getElementById("num1").value;    
    var num2 = document.getElementById("num2").value;
    var mod = num1%num2;
    document.getElementById("ans").innerHTML = "The modulus of " + num1 + " and " + num2 + " is " + mod + ".";
}
