window.onload = function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
};

function validateForm(event) {
    event.preventDefault(); // Evita el envío del formulario

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        // Crear un objeto con los datos del formulario
        var formData = {
            username: username,
            password: password
        };

        // Convertir el objeto a JSON
        var jsonData = JSON.stringify(formData);

        // Guardar los datos en el almacenamiento local del navegador
        localStorage.setItem('formData', jsonData);

        alert("Formulario enviado correctamente. Datos guardados en JSON.");
        console.log(jsonData); // Mostrar el JSON en la consola para verificación
    }
}
