const sidebar = document.querySelector('#collapse-bar');
const element = document.querySelector("#sidebar");

sidebar.addEventListener("click", (e) => {
  element.classList.toggle("art-info-bar-active");
});


function escribirEnPantalla(texto){
  let arr=texto.split("");
  i=0;
  let intervalo= setInterval(function(){
    if(i==arr.length-1){ 
      document.getElementById("titulo").innerHTML+=arr[i];
      clearInterval(intervalo);
    } 
    else {
      if(arr[i]==" "){
       document.getElementById("titulo").innerHTML+=arr[i];
       document.getElementById("titulo").innerHTML+=arr[i+1];
        i+=2;
      }
      else{
        document.getElementById("titulo").innerHTML+=arr[i];
        i++;
      }
    }
  }, 100);
}

escribirEnPantalla("Welcome to my workspace!");
