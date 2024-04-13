let qrText = document.getElementById("qrtext")
let qrimg = document.getElementById("qrimg")
let qrdiv = document.getElementById("imgdiv")
let anchor = document.getElementById("anchor")
function generateQR(){
    if(qrText.value != ""){


      qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
   qrdiv.classList.add("show-qr");
}
else {
    alert("Write something")
}
};


