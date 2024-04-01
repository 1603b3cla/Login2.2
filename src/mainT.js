window.onload = function() {
    // Cargar los datos almacenados en el archivo JSON al cargar la página
    cargarDatos();
  };
  
  function cargarDatos() {
    // Simular la carga de datos desde un archivo JSON
    var datos = [
      { "nombre": "Juan", "apellido": "Perez" },
      { "nombre": "María", "apellido": "García" },
      { "nombre": "Pedro", "apellido": "López" }
    ];
  
    // Limpiar la tabla antes de cargar los datos
    document.querySelector("#tablaDatos tbody").innerHTML = "";
  
    // Recorrer los datos y agregar cada registro a la tabla
    datos.forEach(function(item) {
      agregarFilaTabla(item.nombre, item.apellido);
    });
  }
  
  function agregarRegistro() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
  
    // Verificar si los campos están vacíos o contienen caracteres no alfabéticos o más de un espacio
    var regex = /^[a-zA-Z ]+$/;
    if (!nombre || !apellido || !regex.test(nombre) || !regex.test(apellido)) {
      alert("Por favor ingrese solo letras y un espacio en los campos de nombre y apellido.");
      return;
    }
  
    agregarFilaTabla(nombre, apellido);
  
    // Limpiar campos después de agregar
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
  }
  
  function agregarFilaTabla(nombre, apellido) {
    var table = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.textContent = nombre;
    cell2.textContent = apellido;
    cell3.innerHTML = `<button class="btn-accion" onclick="editarRegistro(this)"><img src="editar.svg" alt="Editar"></button> <button class="btn-accion" onclick="eliminarRegistro(this)"><img src="eliminar.svg" alt="Eliminar"></button>`;
  }
  
  function editarRegistro(btn) {
    var row = btn.parentNode.parentNode;
    var nombre = row.cells[0].textContent;
    var apellido = row.cells[1].textContent;
    var nuevoNombre = prompt("Editar Nombre:", nombre);
    var nuevoApellido = prompt("Editar Apellido:", apellido);
  
    if (nuevoNombre !== null && nuevoApellido !== null) {
      // Verificar si los campos editados contienen solo letras y un espacio
      var regex = /^[a-zA-Z ]+$/;
      if (!regex.test(nuevoNombre) || !regex.test(nuevoApellido)) {
        alert("Por favor ingrese solo letras y un espacio en los campos de nombre y apellido.");
        return;
      }
  
      row.cells[0].textContent = nuevoNombre;
      row.cells[1].textContent = nuevoApellido;
    }
  }
  
  function eliminarRegistro(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  