// Elementos del DOM
const miMusica = document.getElementById("miMusica");
const botonReproducir = document.getElementById("reproducir");
const botonPausar = document.getElementById("pausar");
const botonDetener = document.getElementById("detener");

//Reproducir la música
botonReproducir.addEventListener("click", function() {
  miMusica.play();
});
botonPausar.addEventListener("click", function() {
  miMusica.pause();
});
botonDetener.addEventListener("click", function() {
  miMusica.pause();
  miMusica.currentTime = 0;
});

// Obtener las canciones seleccionadas del almacenamiento local y mostrarlas en la página principal
const cancionesSeleccionadas = JSON.parse(localStorage.getItem("cancionesSeleccionadas")) || [];

const cancionesSeleccionadasList = document.getElementById("canciones-seleccionadas");

// Cargar el listado de canciones desde el archivo JSON
fetch("cancionesJSON/topCanciones.json")
		.then(response => response.json())
		.then(data => {
				data.canciones.forEach(cancion => {
						if (cancionesSeleccionadas.includes(cancion.id.toString())) {
								const li = document.createElement("li");
								li.textContent = `${cancion.titulo} - ${cancion.artista} - ${cancion.genero}`;
								cancionesSeleccionadasList.appendChild(li);
						}
				});
		});