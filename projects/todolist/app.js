const toDoList = document.querySelector("#to-do-list");
const inputText = document.querySelector("#inputt");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#newBtn") 
btn.addEventListener("click",()=>{
    if(inputText.value != ""){
    let li = document.createElement("li");
    li.innerText = inputText.value;
    toDoList.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
     inputText.value = "";
     saveData()
    }else{
        alert("You must write something")
        saveData()
    }
})
toDoList.addEventListener("click",(e)=>{
      if(e.target.tagName === "LI"){
        e.target.classList.toggle("add");
        btn2.classList.remove("hid")
          saveData()
      } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        btn2.classList.add("hid")
        saveData();
      }
      btn2.addEventListener("click",hello);
})
 function hello(){
   
    const li = document.querySelectorAll("li");
    li.forEach((hel)=>{
        if(hel.classList.contains("add")){
            hel.remove();
            saveData();
        }
        btn2.classList.add("hid")
        saveData();
    })
 }

function saveData(){
    localStorage.setItem("dataitem",toDoList.innerHTML);
}

function showFunction(){
    toDoList.innerHTML = localStorage.getItem("dataitem");
}
showFunction();