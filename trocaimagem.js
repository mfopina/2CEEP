
function slide1(){
document.getElementById('id').src="imagens/Hyundai.jpg";
setTimeout("slide2()", 5000)
}

function slide2(){
document.getElementById('id').src="imagens/magnifico.jpg";
setTimeout("slide3()", 5000)
}

function slide3(){
document.getElementById('id').src="imagens/propaganda-carro.jpg";
setTimeout("slide4()", 5000)
}
function slide4(){
document.getElementById('id').src="imagens/2.jpg";
setTimeout("slide1()", 3000)
}