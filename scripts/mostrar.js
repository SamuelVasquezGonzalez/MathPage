const botonMostrar = document.querySelector(".more");
const cuerpoOculto = document.querySelector(".cuerpo-mas");

botonMostrar.addEventListener("click", mostrar);

function mostrar () {
    cuerpoOculto.classList.toggle("oculto"); 
    clase = cuerpoOculto.classList;
    
    botonMostrar.innerHTML = 'Ver Menos <i class="fas fa-arrow-up"></i>';
    let icono = '<i class="fas fa-arrow-down"></i>';
    while(clase[1] == "oculto"){
        botonMostrar.innerHTML = `Ver Mas Servicios ${icono}`;
        window.scroll(0, 0);
        break;
    }

    window.scroll(0, 2000);
}