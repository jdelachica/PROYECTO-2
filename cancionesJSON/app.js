
var esAdministrador = true;

  
    if (esAdministrador) {
      document.getElementById("adminPanel").style.display = "block";
    
    }

    
function cerrarSesion() {
  window.location.href = 'login.html';
}




    var canciones = [
      {
        "id": 1,
        "titulo": "Luces de Neón",
        "artista": "Frida con Calor",
        "genero": "Rock"
      },
      {
        "id": 2,
        "titulo": "In your Hands",
        "artista": "El conejo Malo",
        "genero": "Balada"
      },
      {
        "id": 3,
        "titulo": "At Firs Sight",
        "artista": "El conejo Malo",
        "genero": "Pop-Rock"
      },
      {
        "id": 4,
        "titulo": "A Day to Remenber",
        "artista": "Lady GluGlu",
        "genero": "Funk"
      },
      {
        "id": 5,
        "titulo": "Nation",
        "artista": "H2O",
        "genero": "Electronica"
      },
      {
        "id": 6,
        "titulo": "Route 66",
        "artista": "Willy Fox",
        "genero": "Pop-Rock"
        
      }
    ]

// Lista inicial de canciones
var canciones = [
  { id: 1, nombre: "Luces de Neón", artista: "Frida con Calor",},
  { id: 2, nombre: "In your Hands", artista: "El conejo Malo" },
  { id: 3, nombre: "At First Sight", artista: "El conejo Malo" },
  { id: 4, nombre: "A Day to Remember", artista: "Lady GluGlu" },
  { id: 5, nombre: "Nation", artista: "H20" },
  { id: 6, nombre: "Route 66", artista: "Willy Fox" }
];

// Función para mostrar la tabla de canciones
function mostrarTabla() {
  var tabla = document.getElementById("tablaCanciones");
  tabla.innerHTML = ""; 


canciones.forEach(function(cancion) {
  var fila = document.createElement("tr");
  fila.innerHTML = `<td>${cancion.id}</td>
                    <td>${cancion.nombre}</td>
                    <td>${cancion.artista}</td>
                    <td>
                      <button  onclick="editarCancion(${cancion.id})" 
                      <i class="bi bi-pencil-square"></i>
                      </button>
                      <button S onclick="borrarCancion(${cancion.id})"
                      <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>`;
  tabla.appendChild(fila);
});
}

// Función para editar una canción (solo imprime un mensaje por ahora)
function editarCancion(id) {
  alert(`Editar canción con ID ${id}`);
}

// Función para borrar una canción (solo imprime un mensaje por ahora)
function borrarCancion(id) {
  alert(`Borrar canción con ID ${id}`);
}

// Mostrar la tabla inicial
mostrarTabla()
var esAdministrador = true;

  
    if (esAdministrador) {
      document.getElementById("adminPanel").style.display = "block";
    }

    var canciones = [
      {
        "id": 1,
        "titulo": "Luces de Neón",
        "artista": "Frida con Calor",
        "genero": "Rock"
      },
      {
        "id": 2,
        "titulo": "In your Hands",
        "artista": "El conejo Malo",
        "genero": "Balada"
      },
      {
        "id": 3,
        "titulo": "At Firs Sight",
        "artista": "El conejo Malo",
        "genero": "Pop-Rock"
      },
      {
        "id": 4,
        "titulo": "A Day to Remenber",
        "artista": "Lady GluGlu",
        "genero": "Funk"
      },
      {
        "id": 5,
        "titulo": "Nation",
        "artista": "H2O",
        "genero": "Electronica"
      },
      {
        "id": 6,
        "titulo": "Route 66",
        "artista": "Willy Fox",
        "genero": "Pop-Rock"
        
      }
    ]

// Lista inicial de canciones
var canciones = [
  { id: 1, nombre: "Luces de Neón", artista: "Frida con Calor",},
  { id: 2, nombre: "In your Hands", artista: "El conejo Malo" },
  { id: 3, nombre: "At First Sight", artista: "El conejo Malo" },
  { id: 4, nombre: "A Day to Remember", artista: "Lady GluGlu" },
  { id: 5, nombre: "Nation", artista: "H20" },
  { id: 6, nombre: "Route 66", artista: "Willy Fox" }
];

// Función para mostrar la tabla de canciones
function mostrarTabla() {
  var tabla = document.getElementById("tablaCanciones");
  tabla.innerHTML = ""; 


canciones.forEach(function(cancion) {
  var fila = document.createElement("tr");
  fila.innerHTML = `<td>${cancion.id}</td>
                    <td>${cancion.nombre}</td>
                    <td>${cancion.artista}</td>
                    <td>
                      <button  onclick="editarCancion(${cancion.id})" 
                      <i class="bi bi-pencil-square"></i>
                      </button>
                      <button S onclick="borrarCancion(${cancion.id})"
                      <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>`;
  tabla.appendChild(fila);
});
}

// Función para editar una canción (solo imprime un mensaje por ahora)
function editarCancion(id) {
  alert(`Editar canción con ID ${id}`);
}

// Función para borrar una canción (solo imprime un mensaje por ahora)
function borrarCancion(id) {
  alert(`Borrar canción con ID ${id}`);
}

// Mostrar la tabla inicial
mostrarTabla()

