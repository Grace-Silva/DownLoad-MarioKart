/* selección de elementos: */
let downloadButton = document.querySelector(".downloadButton");

let countdown = document.querySelector(".countdown"); // span

let countdownText = document.querySelector(".countdownText"); // h1

let pleaseWaitText = document.querySelector(".pleaseWaitText"); // h2

let manualDownloadText = document.querySelector(".manualDownloadText");

let manualDownloadLink = document.querySelector(".manualDownloadLink");

let mainContainer = document.querySelector(".mainContainer");

let rewardAudio = document.getElementById("rewardAudio");

// al clickear sobre nuestro botón este desaparece y las demás funciones se ejecutarán:

downloadButton.addEventListener("click", () => {
  rewardAudio.volume = 0.5;
  rewardAudio.play();

  setTimeout(() => {
    // hacemos esperar a la funcion de cuenta regresiva 1 segundo, para que la transición sea más suave y brinde una mejor experiencia

    /* aqui el fondo se opacará y cambiará su imagen */
    mainContainer.style.background =
      "radial-gradient(circle, rgba(4,4,4,0.3) 20%, rgba(4,4,4,0.6) 80%), url('./img/background2.jpg')";
    mainContainer.style.backgroundSize = "cover";

    downloadButton.style.display = "none";

    countdownText.style.display = "block";
    countdownText.style.marginTop = "30vh"; // desplazo el texto hacia abajo por razones de estética
  }, 1000);

  let timeLeft = 10; // 10 segundos de espera

  // función para contar hacia atrás
  let downloadTimer = setInterval(function timeCount() {
    timeLeft = timeLeft - 1;
    // modifico el valor del número contenido dentro del span, decrecerá en cada ejecución
    countdown.textContent = timeLeft;

    // cuando el conteo llegue a cero esta se detendrá, de lo contrario mostrará números negativos

    if (timeLeft <= 0) {
      clearInterval(downloadTimer);

      // instrucciones que se cumplirán cuando la cuenta llegue a cero
      pleaseWaitText.style.display = "block";
      // una vez mostrado este texto contará 3 segundos para habilitar la descarga manual:
      setTimeout(() => {
        pleaseWaitText.style.display = "none";

        // la opción de descarga manual se habilita
        manualDownloadText.style.display = "block";

        let fileLink = "./files/Mario Kart 64 (Europe) (Rev A).zip"; // damos la ruta para descargar el archivo
        window.location.href = fileLink;

        // le asignamos el link a el texto de descarga manual:
        manualDownloadLink.href = fileLink;
      }, 3000);
    }
  }, 1000); // la funcion se actualizará cada 1 segundo
});

// menu lateral
let menu = document.querySelector(".menu");
let navLinks = document.querySelector(".navLinks");

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('open');
}


/* carrusel de personajes */

// botón izquierdo:

document.querySelector(".left").onclick = function(){
  let character = document.querySelector(".character").offsetWidth;

  document.querySelector(".characters").scrollLeft -= character;
}

// botón derecho:

document.querySelector(".right").onclick = function(){
  let character = document.querySelector(".character").offsetWidth;

  document.querySelector(".characters").scrollLeft += character;
}

/* función ir arriba */
let goUp = document.querySelector(".goUp");
goUp.addEventListener("click", () =>{
  window.scrollTo(0,0);
});

/* aparecer y desaparecer botón */
window.onscroll = () =>{

  if(window.scrollY <= 120){
    goUp.style.visibility = "hidden";
    goUp.style.opacity = "0";
  }
  else{
    goUp.style.visibility = "visible";
    goUp.style.opacity = "1";
  }
}