//var a = document.querySelectorAll('#textval').value;

function display_aa(val) {
    document.getElementById('display').innerHTML += val;
}

function clearScreen(){
    document.getElementById('display').innerHTML =0;
}

function calculate() {
    var x = document.getElementById('display').innerHTML = val;
    var y = eval(x);
    document.getElementById('display').innerHTML = y;
}