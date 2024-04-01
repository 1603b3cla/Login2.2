document.getElementById('btlogin').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de correo electrónico y contraseña
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;

    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);

    // Validar los campos
    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos");
        return;
    }

    // Verificar si el correo electrónico y la contraseña son correctos
    if (email !== "calvo@gmail.com" || password !== "12345678") {
        alert("Correo electrónico o contraseña incorrectos");
        return;
    }

    // Suponiendo que la autenticación es exitosa, redireccionar a index2.html
    console.log("Redireccionando a indexT.html");
    window.location.href = "indexT.html";
});
