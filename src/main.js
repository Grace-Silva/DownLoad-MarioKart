/* selecciono el botón y lo asigno a una variable. */
let downloadButton = document.querySelector(".downloadButton");
/* selecciono el texto de cuenta regresiva */
let countdown = document.querySelector(".countdown");
let countdownText = document.querySelector(".countdownText");

let pleaseWaitText = document.querySelector(".pleaseWaitText");
let manualDownloadText = document.querySelector(".manualDownloadText");
let manualDownloadLink = document.querySelector(".manualDownloadLink");

let mainContainer = document.querySelector(".mainContainer");
let rewardAudio = document.getElementById("rewardAudio");

downloadButton.addEventListener("click", () =>{
    // al clickear sobre nuestro botón este desaparece y las demás funciones se ejecutarán
    /* aqui el fondo se opacará y cambiará su imagen */
    mainContainer.style.background = "radial-gradient(circle, rgba(4,4,4,0.5) 20%, rgba(4,4,4,0.8) 80%), url('./img/background2.jpg')";
    mainContainer.style.backgroundSize = "cover";
    downloadButton.style.display = "none";
    countdownText.style.display = "block";
    countdownText.style.marginTop = "30vh";

    rewardAudio.volume = 0.5;
    rewardAudio.play();

    let timeLeft = 10; // 10 segundos de espera

    // función para contar hacia atrás
    let downloadTimer = setInterval(function timeCount(){
        
        timeLeft = timeLeft - 1;
        // modifico el valor del número contenido dentro del span, decrecerá en cada ejecución
        countdown.textContent = timeLeft;

        // cuando el conteo llegue a cero esta se detendrá, de lo contrario mostrará números negativos

        if(timeLeft<=0){
            clearInterval(downloadTimer);

            // instrucciones que se cumplirán cuando la cuenta llegue a cero
            pleaseWaitText.style.display = "block"; // una vez mostrado este texto contará 3 segundos para habilitar la descarga manual

            setTimeout(() =>{

                pleaseWaitText.style.display = "none";
                manualDownloadText.style.display = "block";

                let fileLink = "./files/Mario Kart 64 (Europe) (Rev A).zip"; // damos la ruta para descargar el archivo
                window.location.href = fileLink;

                // le asignamos el link a el texto de descarga manual:
                manualDownloadLink.href = fileLink;


            }, 3000);
        }

    }, 1000); // la funcion se actualizará cada 1 segundo



});