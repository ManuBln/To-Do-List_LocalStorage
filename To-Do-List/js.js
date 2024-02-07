function enviar() {
    var nombreJuego = document.getElementById("juego").value;
    if (nombreJuego.trim() === null || nombreJuego.trim() === "" | nombreJuego.trim() === " ") {
        alert("pon algo tio");
    }else{
        let juegos = JSON.parse(localStorage.getItem('juegos')) || [];
        juegos.push(nombreJuego);
        localStorage.setItem('juegos', JSON.stringify(juegos));
        mostrar();
    }
    
}

function mostrar() {
    var juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    var lista = document.getElementById("lista");
   
        lista.style.display = "block";
        lista.innerHTML = '';

        juegos.forEach(function (juego) {
            var li = document.createElement('li');
            li.textContent = juego;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('deleteButton');
            deleteButton.onclick = function(){
                eliminarJuego(juego);
            }
            li.appendChild(deleteButton);
            lista.appendChild(li);
        });
   



}

function eliminarJuego(juegoEliminar) {
    var juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    juegos = juegos.filter(juego => juego !== juegoEliminar);
    localStorage.setItem('juegos', JSON.stringify(juegos));
    mostrar();
}

function borrarLista() {
    // Elimina todos los elementos
    localStorage.clear()
    mostrar();
}

function desaparecer(){
    var lista = document.getElementById("lista");
    if(lista.style.display === 'block'){
        lista.style.display = 'none'
    }else{
        lista.style.display = 'block'
    }
}