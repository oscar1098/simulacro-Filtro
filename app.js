// Informacion inputs del formularios pasajeros
const agregarPasajeros = document.getElementById('agregarPasajeros');
const identi = document.getElementById('identi');  
const nombrePersona = document.getElementById('nombrePersona');  
const apellido = document.getElementById('apellido');  
const telefono = document.getElementById('telefono');  
const correo = document.getElementById('correo');  
const fecha = document.getElementById('fecha');  
const nacionalidad = document.getElementById('nacionalidad');

const pasajeros = []; // Arreglo que almacena los objetos pasajero
let idPasajero = 0; // id pasajero
let  fidelizacion = 0; // puntos fidelizacion
    
const listar = document.getElementById('listar') // Boton listar pasajeros en la tabla
const padreTablaPasajeros = document.getElementById('padreTablaPasajeros') // Cuerpo de la tabla pasajeros

const botonBuscar =  document.getElementById('botonBuscar'); //Boton buscar pasajero
const buscar =  document.getElementById('buscar');  // input buscar pasajero
const cuerpoModalBusquedaPasajero = document.getElementById('cuerpoModalBusquedaPasajero') // Modal que muestra la informacion del pasajero

// Informacion inputs del formulario rutas
const agregarDestino = document.getElementById('agregarDestino');
const nombreRuta = document.getElementById('nombreRuta');
const valorTiquete = document.getElementById('valorTiquete');
const ciudadOrigen = document.getElementById('ciudadOrigen');
const ciudadDestino = document.getElementById('ciudadDestino');
const puntosFide = document.getElementById('puntosFide');

const destinos = [] // Arreglo que almacena los objetos destino 
let idRuta = 0; 

const listarRutas = document.getElementById('listarRutas'); // Boton listar rutass
const padreTablaDestino = document.getElementById('padreTablaDestino') // Cuerpo tabla destinos


const agregarPasajero = (event) => { // Agregar pasajeros 

    event.preventDefault();

    const pasajero ={ 
        idPasajero : idPasajero, // Para llevar control sobre el objeto pasajero
        identi : identi.value, 
        nombrePersona : nombrePersona.value, 
        apellido : apellido.value, 
        telefono : telefono.value, 
        correo : correo.value, 
        fecha : fecha.value, 
        nacionalidad : nacionalidad.value, 
        fidelizacion : fidelizacion
    }

    pasajeros.push(pasajero);
    idPasajero++;
    agregarPasajeros.reset()
}

const listarPasajeros = () => { // Listar pasajeros en la tabla

    if ( pasajeros.length === 0 ){   // Validar que el arreglo no este vacio
        alert('No hay pasajeros registrados');
        return;
    }

    padreTablaPasajeros.innerHTML = ''; // Vaciar el cuerpo de la tabla

    for ( let pasajero of pasajeros ){  // Crear la tabla con el arreglo pasajeros

        const cuerpoTablaPasajero = document.createElement('tr');

        // el td de losbotones tiene el mismo id que el id objeto pasajero
        cuerpoTablaPasajero.innerHTML = `
        <tr>
          <th >${pasajero.identi}</th>
          <td>${pasajero.nombrePersona}</td>
          <td>${pasajero.apellido}</td>
          <td>${pasajero.telefono}</td>
          <td>${pasajero.correo}</td>
          <td>${pasajero.fecha}</td>
          <td>${pasajero.nacionalidad}</td>
          <td class = 'text-center w-25'  id='${pasajero.idPasajero}'> 
            <button type="button" class="btn btn-sm btn-warning m-1 editarPasajero" id='btnEditarPasajero' data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>
            <button type="button" class="btn btn-sm btn-danger m-1" id='btnEliminarPasajero'>Eliminar</button>
          </td>
        </tr>
        `
        padreTablaPasajeros.appendChild(cuerpoTablaPasajero);// Añadir el td creado al cuerpo de la tabla 
    }
}

const indiceArreglo = ( nombreId,numeroId,arreglo ) => { // Conseguir el indice del objeto en el arreglo comparando id
    
    for ( let i = 0; i < arreglo.length; i++ ){
        if ( arreglo[i][nombreId] == numeroId ){ 
            return i;
        }
    }
}

const validarInputsEditar = (input,indice,clave,arreglo) => { // Validar los inputs del formulario editar

   return ( input == '' ) ? arreglo[indice][clave] : input; // si no se hicieron cambios que retorne el valor que tenia
}

const operacionesPasajero = (event) => { // Funcion del evento click de la tabla 

    let botonEvento = event.target; //Traer el boton que tuvo el evento

    if ( botonEvento.id == 'btnEliminarPasajero' ){ // Encontrar el boton eliminar

        let idP =  botonEvento.parentNode.id;  // id del padre del boton que es igual al id del objeto

        let indice = indiceArreglo('idPasajero',idP,pasajeros); // indice del pasajero a eliminar del arreglo pasajeros

        pasajeros.splice(indice,1); // Eliminar el pasajero del arreglo pasajeros 
        
        ( pasajeros.length === 0 ) ? padreTablaPasajeros.innerHTML = '' : listarPasajeros() // Actualizar el contenido de la tabla
    }

    if ( botonEvento.id == 'btnEditarPasajero' ){ // Encontrar el boton editar

        let idP = botonEvento.parentNode.id; //  id del padre del boton que es igual al id del objeto
        
        let indice = indiceArreglo('idPasajero',idP,pasajeros) // indice del pasajero a editar del arreglo pasajeros
        
        let editarPasajeros = document.getElementById('editarPasajeros') // Traer datos de formulario editar passajero
        let identiEditar = document.getElementById('identiEditar');
        let nombrePersonaEditar = document.getElementById('nombrePersonaEditar');
        let apellidoEditar = document.getElementById('apellidoEditar');
        let telefonoEditar = document.getElementById('telefonoEditar');
        let correoEditar = document.getElementById('correoEditar');
        let fechaEditar = document.getElementById('fechaEditar');
        let nacionalidadEditar = document.getElementById('nacionalidadEditar');

        const editarPasajero = (event) => { // Editar pasajeros

            event.preventDefault();

            //Camibiar la informacion del pasajero con los inputs
            pasajeros[indice].identi = validarInputsEditar(identiEditar.value,indice,'identi',pasajeros);
            pasajeros[indice].nombrePersona = validarInputsEditar(nombrePersonaEditar.value,indice,'nombrePersona',pasajeros);
            pasajeros[indice].apellido = validarInputsEditar(apellidoEditar.value,indice,'apellido',pasajeros);
            pasajeros[indice].telefono = validarInputsEditar(telefonoEditar.value,indice,'telefono',pasajeros);
            pasajeros[indice].correo = validarInputsEditar(correoEditar.value,indice,'correo',pasajeros);
            pasajeros[indice].fecha = validarInputsEditar(fechaEditar.value,indice,'fecha',pasajeros);
            pasajeros[indice].nacionalidad = validarInputsEditar(nacionalidadEditar.value,indice,'nacionalidad',pasajeros);

            editarPasajeros.reset(); // Limpiar el formulario pasajeros
            listarPasajeros(); // Listar para ver los cambios
            editarPasajeros.removeEventListener('submit', editarPasajero); // Para que se ejecute la funcion una unica vez
        }
        editarPasajeros.addEventListener('submit', editarPasajero); // Formulario editar pasajeros
    }
}

const buscarPasajero = () => { // Buscar pasajeros por id

    cuerpoModalBusquedaPasajero.innerHTML = '';

    const cuerpoDatos = document.createElement('div') // Div que almacena el contenido de la busqueda

    if ( pasajeros.length === 0 ){
        cuerpoModalBusquedaPasajero.innerHTML = `No hay pasajeros registrados`;
    }

    if ( buscar.value == '' ){
        cuerpoModalBusquedaPasajero.innerHTML = `Ingrese el documento del pasajero`;
    }

    for ( let pasajero of pasajeros ){
        if ( pasajero.identi === buscar.value ){

            cuerpoDatos.innerHTML = `
            <div>
            <p><b>Identificacion: </b>${pasajero.identi}</p>
            <p><b>Nombre: </b>${pasajero.nombrePersona}</p>
            <p><b>Apellido: </b>${pasajero.apellido}</p>
            <p><b>Telefono: </b>${pasajero.telefono}</p>
            <p><b>Correo: </b>${pasajero.correo}</p>
            <p><b>Fecha de nacimiento: </b>${pasajero.fecha}</p>
            <p><b>Nacionalidad: </b>${pasajero.nacionalidad}</p>
            </div>
            `
            cuerpoModalBusquedaPasajero.appendChild(cuerpoDatos);

        }else{
            cuerpoModalBusquedaPasajero.innerHTML = `No se encontro el pasajero`;
        }
    }
    buscar.value = '';
}

const agregarRuta = (event) => {

    event.preventDefault();

    const ruta = { 
                idRuta : idRuta,
                nombreRuta: nombreRuta.value , 
                valorTiquete: valorTiquete.value , 
                ciudadOrigen: ciudadOrigen.value , 
                ciudadDestino: ciudadDestino.value , 
                puntosFide: puntosFide.value  
            }
    agregarDestino.reset();

    destinos.push(ruta)
}

const listarDestinos = () => {

    for ( let destino of destinos ){

        const cuerpoTablaDestino = document.createElement('tr');

        // el td del boton eliminar tiene el mismo id que el id objeto destino
        cuerpoTablaDestino.innerHTML = `
        <tr>
            <th>${destino.idRuta}</th>
            <td >${destino.nombreRuta}</td>
            <td>${destino.valorTiquete}</td>
            <td>${destino.ciudadOrigen}</td>
            <td>${destino.ciudadDestino}</td>
            <td>${destino.puntosFide}</td>
            <td class = 'text-center w-25'  id='${destino.idRuta}'> 
            <button type="button" class="btn btn-sm btn-danger m-1" id='btnEliminarPasajero'>Eliminar</button>
            </td>
        </tr>
        `
        padreTablaDestino.appendChild(cuerpoTablaDestino);// Añadir el td creado al cuerpo de la tabla 
    }
}

agregarPasajeros.addEventListener('submit', agregarPasajero); // Formulario agregar pasajeros
listar.addEventListener('click',listarPasajeros); // Listar pasajeros en la tabla
padreTablaPasajeros.addEventListener('click',operacionesPasajero);// Editar - Eliminar pasajero
botonBuscar.addEventListener('click',buscarPasajero);// Botom buscar pasajeros
agregarDestino.addEventListener('submit',agregarRuta); // Formulario agregar ruta
listarRutas.addEventListener('click',listarDestinos) // Listar destinos en la tabla



