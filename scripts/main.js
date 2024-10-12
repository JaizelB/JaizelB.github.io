    let miImagen = document.querySelector("img");
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "image/programando.jpeg") {
        miImagen.setAttribute("src", "image/programando2.png");
    } else {
        miImagen.setAttribute("src", "image/programando.jpeg");
    }
};

let miboton = document.querySelector("button");
let mititulo = document.querySelector("h3"); 

    function estableceNombreUsuario() {
        let miNombre = prompt("establece tu nombre.");
        if (!miNombre) {
            estableceNombreUsuario();
            } else {
                localStorage.setItem("nombre", miNombre);
                mititulo.innerHTML = "bienvenido a mi pagina, " + miNombre;
            }
        }

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
mititulo.textContent = "bienvenido a mi pagina, " + nombreAlmacenado;
}  
miboton.onclick = function () {
    estableceNombreUsuario();
};