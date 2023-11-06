class cancion {
	constructor(
		id,
		title,
		description,
		category,
		published = "false",
		pic,
		trailer
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.published = published;
		this.pic = pic;
		this.trailer = trailer;
	}
}
// Elementos del DOM
const miMusica = document.getElementById("miMusica");
const botonReproducir = document.getElementById("reproducir");
const botonPausar = document.getElementById("pausar");
const botonDetener = document.getElementById("detener");

//Reproducir la música
botonReproducir.addEventListener("click", function() {
  miMusica.play();
});

//Pausar la música
botonPausar.addEventListener("click", function() {
  miMusica.pause();
});

//Detener la música y volver al principio
botonDetener.addEventListener("click", function() {
  miMusica.pause();
  miMusica.currentTime = 0;
});

//Reproducir la música 2
botonReproducir.addEventListener("click", function() {
  miMusica.play();
});

//Pausar la música 2
botonPausar.addEventListener("click", function() {
  miMusica.pause();
});

//Detener la música y volver al principio 2
botonDetener.addEventListener("click", function() {
  miMusica.pause();
  miMusica.currentTime = 0;
});