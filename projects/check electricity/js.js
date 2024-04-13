





  
 
   function hid(){

  
    var main = [document.getElementById("watt").value,document.getElementById("hours").value,document.getElementById("units").value,document.getElementById("days").value];
         
    if(main[0].trim() == "" ){
        alert("Please fill in the input field before proceeding");
    }
      else{

    
    var calculator = (main[0]*main[1]*main[2]*main[3])/1000;

        //calcul
        var units = main[0]*main[1]*main[3]/1000;
     
     
        var show = document.getElementsByClassName("calcu")[0];
        show.classList.add("show")
       
        var get = [document.getElementById("wat"),document.getElementById("hou"),document.getElementById("day"),document.getElementById("uni"),document.getElementById("total"),document.getElementById("adtext")];
        get[0].innerHTML="Watt:  <b>  " + main[0]+"W</b>";
        get[1].innerHTML="Hours: <b> " + main[1]+"hours</b>";
        get[2].innerHTML="Days: <b> " + main[3]+"</b>";
        get[3].innerHTML="Per Unit price  <b> Rs: " + main[2]+"</b>"; 
        get[4].innerHTML=  "Number of Units consumed :<b> "+units+" Units </b>"
        get[5].innerHTML ="Rs: <b>  "+ calculator +"</b>";


        var hid = document.getElementsByClassName("calcul")[0];
        hid.style.display="none"
    }
    }
 



function enter(){

  


    }
   

window.addEventListener("load",function(){
    var load =  document.getElementsByClassName("preloader")[0];
    load.style.display="none";
});

