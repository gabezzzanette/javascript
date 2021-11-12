
function myFunction() {
    
    document.getElementById("demo").innerHTML = "Hello World!";

    var img = document.createElement("img");
    img.width= 150;
    img.src = "img/pngfind.com-clifford-the-big-red-5549834.png";
    document.getElementById('imagem').appendChild(img);

}

var resetButton = document.getElementbyId('reset-button');
resetButton.onclick= reloadPage;

function reloadPage(){
    window.location.reload();
}