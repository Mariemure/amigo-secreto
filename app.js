// Array para almacenar los nombres de los amigos y sus amigos secretos
let amigos = [];

//Hacer que funcione la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Función para agregar un amigo
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo'); // Obtener el valor del input
    const nombre = nombreInput.value.trim(); // Limpiar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push({ nombre: nombre, amigoSecreto: null });

    // Limpiar el campo de texto
    nombreInput.value = "";

    // Actualizar la lista visible de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener la lista HTML

    // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    for (let amigo of amigos) {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigo.nombre; // Establecer el nombre como texto
        listaAmigos.appendChild(li); // Agregar el <li> a la lista HTML
    }
}

// Función para mostrar el amigo secreto sorteado
function mostrarAmigosSecretos() {
    const resultadoDiv = document.getElementById('resultado'); // Obtener el div de resultados
    resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores

    // Elegir un amigo secreto al azar
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Crear un párrafo con el resultado
    const p = document.createElement('p');
    p.textContent = `El amigo secreto sorteado es: ${amigoSorteado.nombre}`;
    resultadoDiv.appendChild(p); // Agregar el párrafo al div de resultados

    // Limpiar la lista después del sorteo
    amigos = [];
    actualizarListaAmigos();
}

// Función para realizar el sorteo de amigos secretos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo para realizar el sorteo.");
        return;
    }

    // Hacer un sorteo aleatorio de amigos
    let amigosDisponibles = [...amigos]; // Copiar el array de amigos

    // Asignar un amigo secreto aleatorio a cada persona
    for (let i = 0; i < amigos.length; i++) {
        // Seleccionar un amigo aleatorio
        const amigoSecretoIndex = Math.floor(Math.random() * amigosDisponibles.length);
        amigos[i].amigoSecreto = amigosDisponibles[amigoSecretoIndex].nombre;

        // Eliminar al amigo asignado del array para que no se repita
        amigosDisponibles.splice(amigoSecretoIndex, 1);
    }

    // Mostrar el resultado del sorteo
    mostrarAmigosSecretos();
    
}


