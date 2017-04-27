var tabl = document.getElementById("Table");

var btn = document.getElementById("btn");
var i = 0;
var ii = 0;
var add = document.getElementById("Add");
var rbr = 1;
function Del(ClickedID) {
 

    document.getElementById(ClickedID).closest("tr").remove();

};


add.addEventListener("click", function () {
    var ime = document.getElementById("InpName").value;
    var prez = document.getElementById("InpLaName").value;
    var tit = document.getElementById("InpTitula").value;
    var god = document.getElementById("InpGodina").value;
  
    if (ime != "" && prez!="" && tit!="")
    {
        if (rbr % 2 != 0) {
            var htmlString2 = "<tr id='"+i+"' style='background-color: #efefef;'>" + "<td style='text-align:center'>" + rbr + "." + "</td>" + "<td>"
                + ime + "</td>" + "<td>" + prez + "</td>" + "<td>" + tit + "</td>" + "<td style='text-align:center'>" + god + 
                "</td>" + "<td style='background-color:white'>" + " <input type='image' value='Remove' id='"+rbr+"'  class='test' onClick='Del(this.id)'"+rbr+"' type='image' src='delete.png' height='20px' />" + "</td>" + "</tr>";
            tabl.insertAdjacentHTML('beforeend', htmlString2);
            rbr++;
            ii++;

            var ime = document.getElementById("InpName").value = "";
            var prez = document.getElementById("InpLaName").value = "";
            var tit = document.getElementById("InpTitula").value = "";
            var god = document.getElementById("InpGodina").value = "";

            if (i >= 9) {
                document.getElementById("btn").hidden = true;
            }

        }

        else {

            var htmlString2 = "<tr  id='" + i +"' style='background-color: #cccccc;'>" + "<td style='text-align:center'>" + rbr + "." + "</td>" + "<td>"
                + ime + "</td>" + "<td>" + prez + "</td>" + "<td>" + tit + "</td>" + "<td style='text-align:center'>" + god + "</td>" + "<td style='background-color:white'>"
                 + " <input type='image' value='Remove'   class='test' id='"+rbr+"' onClick='Del(this.id)' " + rbr +"' type='image' src='delete.png' height='20px' />" + "</td>"+ "</tr>";
            tabl.insertAdjacentHTML('beforeend', htmlString2);
            rbr++;

            ii++;
            var ime = document.getElementById("InpName").value = "";
            var prez = document.getElementById("InpLaName").value = "";
            var tit = document.getElementById("InpTitula").value = "";
            var god = document.getElementById("InpGodina").value = "";
            if (i >= 9) {
                document.getElementById("btn").hidden = true;
            }
        }

    }
   
},false);

btn.addEventListener("click", function () {
  
      
  
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',
        'https://raw.githubusercontent.com/emrahokic/Web1/master/students.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();

}, false);

function renderHTML(data) {

    if (rbr % 2 != 0) {
        var htmlString = "<tr style='background-color: #efefef;'>" + "<td class='rbr' style='text-align:center'>" + rbr +"." + "</td>" + "<td>"
            + data[i].name + "</td>" + "<td>" + data[i].lName + "</td>" + "<td>" + data[i].titula + "</td>" + "<td style='text-align:center'>" + data[i].godina + "</td>" + "<td style='background-color:white'>" +
             " <input id='"+rbr+"'  class='test' onClick='Del(this.id)'  class='dell' type='image' src='delete.png' height='20px' />" + "</td>" + "</tr>";
        tabl.insertAdjacentHTML('beforeend', htmlString);
        i++;
        rbr++;

        if (i >= 9) {
            document.getElementById("btn").hidden = true;
        }
    }

    else {
        var htmlString = "<tr style='background-color: #cccccc;'>" + "<td style='text-align:center'>" + rbr + "."  + "</td>" + "<td>"
            + data[i].name + "</td>" + "<td>" + data[i].lName + "</td>" + "<td>" + data[i].titula + "</td>" + "<td style='text-align:center'>" + data[i].godina + "</td>" + "<td style='background-color:white'>" + 
            " <input id='"+rbr+"'  class='test' onClick='Del(this.id)' class='dell' type='image' src='delete.png' height='20px' />" + "</td>" + "</tr>";
        tabl.insertAdjacentHTML('beforeend', htmlString);
        i++;
        rbr++;

        if (i >= 9) {
            document.getElementById("btn").hidden = true;
        }
    }
}