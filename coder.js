var listaClientes = [];
let editando = false;
let indiceEditando = -1;

const formulario = document.getElementById('formulario');
const cedula = document.getElementById('cedula');
const nombres = document.getElementById('nombres');
const apellidos = document.getElementById('apellidos');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const nacimiento = document.getElementById('nacimiento');
const nacionalidad = document.getElementById('nacionalidad');
const tablaPadre = document.getElementById('padreClientes');
const botonSubmit = formulario.querySelector('button[type="submit"]');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (editando) {
        actualizarCliente();
    } else {
        agregarCliente();
    }

    formulario.reset();
    botonConsult.classList.remove('btnCon')
});

function agregarCliente() {
    var nuevoCliente = {};
    nuevoCliente.numeroN = listaClientes.length + 1;
    nuevoCliente.cedulaN = cedula.value;
    nuevoCliente.nombresN = nombres.value;
    nuevoCliente.apellidosN = apellidos.value;
    nuevoCliente.telefonoN = telefono.value;
    nuevoCliente.correoN = correo.value;
    nuevoCliente.nacimientoN = nacimiento.value;
    nuevoCliente.nacionalidadN = nacionalidad.value;

    listaClientes.push(nuevoCliente);
    listarDatos();
}

function actualizarCliente() {
    var clienteEditando = listaClientes[indiceEditando];
    clienteEditando.cedulaN = cedula.value;
    clienteEditando.nombresN = nombres.value;
    clienteEditando.apellidosN = apellidos.value;
    clienteEditando.telefonoN = telefono.value;
    clienteEditando.correoN = correo.value;
    clienteEditando.nacimientoN = nacimiento.value;
    clienteEditando.nacionalidadN = nacionalidad.value;

    listarDatos();
    editarFin();
}

function editarCliente(index) {
    indiceEditando = index;
    var clienteEditando = listaClientes[indiceEditando];

    cedula.value = clienteEditando.cedulaN;
    nombres.value = clienteEditando.nombresN;
    apellidos.value = clienteEditando.apellidosN;
    telefono.value = clienteEditando.telefonoN;
    correo.value = clienteEditando.correoN;
    nacimiento.value = clienteEditando.nacimientoN;
    nacionalidad.value = clienteEditando.nacionalidadN;

    botonSubmit.innerHTML = 'Actualizar';
    editando = true;
}

function editarFin() {
    indiceEditando = -1;
    botonSubmit.innerHTML = 'Registrar'; 
    editando = false;
}

function listarDatos() {
    tablaPadre.innerHTML = '';

    listaClientes.forEach((e, index) => {
        let hijo = document.createElement('tr');
        hijo.classList.add('table-secondary', 'tabla');
        hijo.id= 'filaPasajero'

        let numero = document.createElement('td');
        numero.textContent = `${e.numeroN}`;
        hijo.appendChild(numero);

        let cedula = document.createElement('td');
        cedula.textContent = `${e.cedulaN}`;
        hijo.appendChild(cedula);
        cedula.id = 'identiElem'

        let nombres = document.createElement('td');
        nombres.textContent = `${e.nombresN}`;
        hijo.appendChild(nombres);
        nombres.id = 'idNombres'

        let apellidos = document.createElement('td');
        apellidos.textContent = `${e.apellidosN}`;
        hijo.appendChild(apellidos);

        let telefono = document.createElement('td');
        telefono.textContent = `${e.telefonoN}`;
        hijo.appendChild(telefono);

        let correo = document.createElement('td');
        correo.textContent = `${e.correoN}`;
        hijo.appendChild(correo);

        let nacimiento = document.createElement('td');
        nacimiento.textContent = `${e.nacimientoN}`;
        hijo.appendChild(nacimiento);

        let nacionalidad = document.createElement('td');
        nacionalidad.textContent = `${e.nacionalidadN}`;
        hijo.appendChild(nacionalidad);

        let opcionB = document.createElement('td');
        botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.classList.add('btn', 'btn-primary');
        botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger');
        opcionB.appendChild(botonEditar);
        opcionB.appendChild(botonEliminar);
        hijo.appendChild(opcionB);

        tablaPadre.appendChild(hijo);

        botonEliminar.addEventListener('click', function() {
            eliminarCliente(index);
        });
        botonEditar.addEventListener('click', function() {
            editarCliente(index);
        });
    });
}

function eliminarCliente(index) {
    listaClientes.splice(index, 1);
    listarDatos();
}