let userInput =document.getElementById("datetime");
userInput.max = new Date().toISOString().split("T")[0];
let container = document.querySelector(".container")
function dateBirth(){
    console.log(userInput.value);
    if(userInput.value != ""){

   

      let birthDate = new Date(userInput.value);
      let m1 = birthDate.getMonth() + 1;
      let d1 = birthDate.getDate();
      let y1 = birthDate.getFullYear();

      let today = new Date();
      let m2 = today.getMonth() + 1;
      let d2 = today.getDate();
      let y2 = today.getFullYear();
       
      let y3,m3,d3;

      y3 = y2 - y1;

      if(m2 >= m1){
        m3 = m2 - m1;
      }else{
        y3--;
        m3 = 12 + m2 - m1;
      }
      if(d2 >= d1){
        d3 = d2 - d1;
      }else{
        m3--;
        d3 = daysInMonth(y1,m1) + d2 - d1;
      }
      if(m3 < 0){
        m3 = 11;
        y3--;
      }
        
         let paragraph = document.getElementById("para");
         paragraph.innerText = `${y3} years, ${m3} month, ${d3} days`;

    }else{
        alert("Enter the date of birth")
    }
    }


function daysInMonth(year,month){
    return new Date(year, month, 0).getDate();
}