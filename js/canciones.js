// Cargar el listado de canciones desde el archivo JSON
fetch("cancionesJSON/topCanciones.json")
  .then(response => response.json())
    .then(data => {
      const cancionesList = document.getElementById("canciones-list");
        data.canciones.forEach(cancion => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = cancion.id;
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(`${cancion.id}-${cancion.titulo} - ${cancion.artista} - ${cancion.genero}`));
        cancionesList.appendChild(li);
        });
      });

// Al hacer clic en el botón "Guardar Selección", guardar las canciones seleccionadas en el almacenamiento local
const guardarSeleccionButton = document.getElementById("guardar-seleccion");
  guardarSeleccionButton.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const cancionesSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
    localStorage.setItem("cancionesSeleccionadas", JSON.stringify(cancionesSeleccionadas));
    alert("Selección de canciones guardada.");
  });