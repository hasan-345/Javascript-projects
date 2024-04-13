const btn = document.getElementById("btn");
const inputBox = document.querySelector(".inputbox");


function createbtn(){
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    paragraph.setAttribute("contenteditable", "true");
    paragraph.classList.add("inputClass");
    image.src = "images/delete.png";
    inputBox.appendChild(paragraph).appendChild(image);
    saveData()
}



inputBox.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData()
    }else if(e.target.tagName === "P"){
        let inputPara = document.querySelectorAll(".inputClass");
        inputPara.forEach((nt)=>{
            nt.onkeyup = function(){
                saveData();
            }
        })
    }
   }) 
 
function saveData(){
    localStorage.setItem("data",inputBox.innerHTML);

}
function showData(){
    inputBox.innerHTML = localStorage.getItem("data");
}
showData();
btn.addEventListener("click",createbtn);
document.addEventListener("keydown",event =>{
     if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
     }
})