let imageUrl;
const parentBtn = document.querySelector(".msg");
let downl = document.getElementById("download");
function RemoveBg(){
  parentBtn.innerHTML = ""
  let upload = document.querySelector(".bgimages");
  let fileInput = document.getElementById("filepicker");
  if(fileInput.files.length != 0){
 const p = document.createElement("p");
 p.innerText = "Please wait...";
 parentBtn.append(p)
const images = fileInput.files[0];
const formData = new FormData();
formData.append('image_file',images);
formData.append('size','auto');
const apikey = '2QSdB36s5MYZ8NrpCrh8hGqM';
fetch('https://api.remove.bg/v1.0/removebg',{
    method:"POST",
    headers:{
        'X-Api-key': apikey
    },
    body: formData
})
.then(function(response){
  return response.blob()
})
.then(function(finalResponse){
   console.log(finalResponse);
   const url = URL.createObjectURL(finalResponse);
   const img = document.createElement("img");
   imageUrl = url;
   img.src = url;
   upload.append(img);
   p.innerText = "Thank you";
  

})
.catch()

upload.innerHTML = "";

}else{
  alert("Please upload image")
}
 

}
const filepicker = document.querySelector("#filepicker");
const downloadbtn = document.getElementsByClassName("btn")[1];
downloadbtn.addEventListener("click",DownloadImage);
function DownloadImage(){
  if(filepicker.files.length != 0){
 
  const anchor = document.createElement("a");
  anchor.href = imageUrl;
  anchor.download = `${filepicker.files[0].name.split('.').slice(0, -1)} ahtishamDev bg-remover.png`;
  document.body.appendChild(anchor);
  anchor.click();
//  document.body.removeChild(a);
 
}else{
  alert("Please upload image")
}
}


