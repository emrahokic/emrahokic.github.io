 $(document).ready(function(){
        $.getJSON("https://raw.githubusercontent.com/emrahokic/Web1/master/gradovi.json", function(result){
               for (var i = 0; i < result.city.length; i++) {
                $("#6City").append("<option id='"+i+"'>"+result.city[i]+"</option>");
               }


            //   $.each(result, function(i, field){
            //     $.each(field, function(i, x){
            //          $("#City").append("<option>"+x+"</option>");
            // });
              
            // });
        });
   
});