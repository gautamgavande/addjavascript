var model = document.querySelector("#add")
model.addEventListener("click", function() {
    var a;
    var b;
    var c;
    a = document.querySelector("#fn").value;
    b = document.querySelector("#sn").value;
    c = parseInt(a) + parseInt(b);
    document.getElementById('res').value = c;

})
var sub = document.querySelector("#sub")
sub.addEventListener("click", function() {
    var a;
    var b;
    var c;
    a = document.querySelector("#fn").value;
    b = document.querySelector("#sn").value;
    c = parseInt(a) - parseInt(b);
    document.getElementById('res').value = c;

})
var mul = document.querySelector("#mul")
mul.addEventListener("click", function() {
    var a;
    var b;
    var c;
    a = document.querySelector("#fn").value;
    b = document.querySelector("#sn").value;
    c = parseInt(a) * parseInt(b);
    document.getElementById('res').value = c;

})
var div = document.querySelector("#div")
div.addEventListener("click", function() {
    var a;
    var b;
    var c;
    a = document.querySelector("#fn").value;
    b = document.querySelector("#sn").value;
    c = parseInt(a) / parseInt(b);
    document.getElementById('res').value = c;

})