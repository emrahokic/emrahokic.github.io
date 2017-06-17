
var inputs = document.getElementsByTagName("input");
console.log(inputs);
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onblur = validacija;
}
document.getElementById("6City").onblur = validacija;
var is = true;

function validacija(el) {
    var element = el.target;
    is = true;
    if (element == null) {
        element = el;
    }

    if (element.value == "") {
        is = false;
    } else {
        switch (element.id) {
            case "1Name": if (element.value.length < 3) { is = false; }
           

                break;
            case "2LName": if (element.value.length < 3) { is = false; }  

                break;
            case "3Email": if (element.value.length < 3) { is = false; }  

                break;
            case "4Password":
                var regexLetter = /[a-zA-Z]/;
                var regexNumber = /[0-9]/;
                var prov = regexLetter.test(element.value) && regexNumber.test(element.value);

                if ((prov != true) || element.value.length < 7) { is = false; }  
                break;
            case "5Password2": if (element.value != document.getElementById("4Password").value) { is = false; }


                break;

            default:
                break;
        }
    }

    if (is) {
        element.classList.remove("error");
    }
    else {

        element.classList.add("error");
    }

}

function save() {
    for (var i = 0; i < inputs.length; i++) {
        validacija(inputs[i]);
    }
    validacija(document.getElementById("6City"));
    if(is){
        dodajuLocalStorage();
    }
}
var niz=new Array;
if (!(localStorage.getItem("Bucket") === null)) {
       niz = JSON.parse(localStorage['Bucket']);
    }
function dodajuLocalStorage(){

    var a=inputs[0].value;
    var b=inputs[1].value;
    var c=inputs[2].value;
    var d=inputs[3].value;
    var e=inputs[4].value;
    var f=document.getElementById("6City").value;
    
    niz.push(a+","+b+","+c+","+d+","+e+","+f);
    var jsonniz=JSON.stringify(niz);
    localStorage.setItem("Bucket",jsonniz);
    alert("Spremljeno");
}