var d1 = JSON.parse(localStorage.getItem('Bucket'));
var niz;
for (var i = 0; i < d1.length; i++) {
    niz = d1[i].split(',');
    $("#Imena").append("<option id='"+i+"'>"+niz[0]+"</option>");
}


function p(){
    var index=(document.getElementById("Imena").selectedIndex)-1;
    var Student=d1[index].split(',');
        console.log(Student);
    
    for (var i = 0; i < Student.length; i++) {
    document.getElementById("K-"+i).value=Student[i];
    }
    
}