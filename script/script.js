//variables 
const dropImg = document.getElementById("drop-img");
const img = document.getElementById("input1");
const img2 = document.getElementById("input2");
const preview = document.getElementById("preview");
const containerChoose = document.getElementById("containerChoose");
const containerSuccess = document.getElementById("containerSuccess");
const cotainerBar= document.getElementById("cotainerBar");
const btnURL=document.getElementById("btnCopyURL");
let imgLink; 
//listener 
img.addEventListener("change", uploadImg);
img2.addEventListener("change", uploadImg);

btnURL.addEventListener("click", (e)=>{
    e.preventDefault()
    const aux = document.createElement('input');
    aux.setAttribute('value', imgLink.slice(4, -1));
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
})
//Funcionalidad de visual de carga
function loading() {
    cotainerBar.style.display="block"
    cotainerBar.animate( {transform: "translateX(0)"}, {duration: 500,
        iterations: Infinity,})
    containerChoose.style.display="none";
    preview.style.display = "none";

   
}
//Funcionalidad de carga de imagenes
function uploadImg() {
    
    loading()
    setTimeout(() => {
        if (img.files.length != 0) {
            imgLink = URL.createObjectURL(img.files[0]);
        } else if (img2.files.length != 0) {
            imgLink = URL.createObjectURL(img2.files[0]);
        }
         createNewImg(imgLink)
    }, 3000)

};

dropImg.addEventListener("dragover", function (e) {
    e.preventDefault()
});

dropImg.addEventListener("drop", function (e) {
    e.preventDefault();
    img2.files = e.dataTransfer.files;
    uploadImg()
});
//Funcionalidad para crear un nuevo hijo, nueva imagen
function createNewImg(url) {
    containerSuccess.style.display = "block"
    preview.style.display = "block"
    cotainerBar.style.display = "none"
    const newImg = document.createElement("img");
    newImg.className = "previeNewImg";
    newImg.src= url
    preview.textContent = "";
    preview.appendChild(newImg)
    btnCopyURL.style.display="block"
}


