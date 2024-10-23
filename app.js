// app.js

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo básico de uso de AJAX con JavaScript puro (sin jQuery)
    const contenidoDinamico = document.getElementById('contenido-dinamico');
    
    // Crear la solicitud
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    
    xhr.onload = function() {
        if (this.status === 200) {
            // Mostrar el contenido en el div de contenido dinámico
            const data = JSON.parse(this.responseText);
            contenidoDinamico.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
        } else {
            contenidoDinamico.innerHTML = '<p>Hubo un error al cargar los datos.</p>';
        }
    };

    xhr.send();
});
