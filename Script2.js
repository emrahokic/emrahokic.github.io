// JavaScript source code







var bt1 = document.getElementById("Asaberi");
var bt2 = document.getElementById("Bsaberi");
var bt3 = document.getElementById("Csaberi");
var bt4 = document.getElementById("Dsaberi");

bt1.addEventListener("click", function () {

    var a1 = document.getElementById("Avar1").value;
    var b1 = document.getElementById("Avar2").value;


    var a1 = parseInt(a1);
    var b1 = parseInt(b1);
    document.getElementById("Arez").value = a1 + b1;

}, false);

bt2.addEventListener("click", function () {

    var a = document.getElementById("Bvar1").value;
    var b = document.getElementById("Bvar2").value;


    var a = parseInt(a);
    var b = parseInt(b);
    document.getElementById("Brez").value = a - b; }, false);

bt3.addEventListener("click", function () {
    var a2 = document.getElementById("Cvar1").value;
    var b2 = document.getElementById("Cvar2").value;


    var a2 = parseInt(a2);
    var b2 = parseInt(b2);
    document.getElementById("Crez").value = a2 * b2;


}, false);

bt4.addEventListener("click", function () {
    var a3 = document.getElementById("Cvar1").value;
    var b3 = document.getElementById("Cvar2").value;


    var a3 = parseInt(a3);
    var b3 = parseInt(b3);
    document.getElementById("Drez").value = a3 / b3;
}, false);