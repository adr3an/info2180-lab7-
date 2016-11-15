$(document).ready((function){
    var lookup = $("#lookup");
    var result = $("result");
    
    lookup.on("click", function(element))
        {
            element.preventDefault();
             if(document.getElementByTd("country").checkValidity())
             {
                 var country = $("#country").val();
                 var c_box= $ ("#all");
                 
                 if(c_box.is(":checked"))
                 {
                     $.ajax("world.php?all=true",{
                         method: "GET"
                     }).done(function(response){
                         $(result).html(response);
                     }).fail(function(){
                         $(result).html("Fail");
                     });
                 }else{
                     if(country != ""){
                         $.ajax("world.php?country="+country, {
                             method: "GET"
                         }).done(function(response){
                             $(response).html(response);
                         }).fail(function(){
                             $(result).html("Fail")
                         });
                     }else{
                         $(result).html("Please Enter a country")
                     }
                 };
             };
        }
        
   }
}