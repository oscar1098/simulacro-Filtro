const agregarPasajeros = document.getElementById('agregarPasajeros'),  //formulario pasajeros
      identi = document.getElementById('identi'), // Input Identificacion del pasajero
      nombrePersona = document.getElementById('nombrePersona'), // Input Nombre del pasajero
      apellido = document.getElementById('apellido'), // Input Apellido del pasajero
      telefono = document.getElementById('telefono'), // Input Telefono del pasajero
      correo = document.getElementById('correo'), // Input correo del pasajero
      fecha = document.getElementById('fecha'), // Input fecha de nacimiento del pasajero
      nacionalidad = document.getElementById('nacionalidad'), // Input nacionalidad del pasajero
      listar = document.getElementById('listar'), // Boton listar pasajeros
      buscar = document.getElementById('buscar'), // Input barra de busqueda de pasajeros
      cuerpoModalBusquedaPasajero = document.getElementById('cuerpoModalBusquedaPasajero');
      botonBuscar = document.getElementById('botonBuscar'), // Boton buscar pasajeros
      modalPasajero = document.getElementById('modalPasajero'), // Nombre del pasajero en el modal
      cerrarTablaPasajeros = document.getElementById('cerrarTablaPasajeros'), // Cerrar tabla de pasajeros
      padreTablaPasajeros = document.getElementById('padreTablaPasajeros'), // padre tabla psasajeros
     
      editarPasajeros = document.getElementById('editarPasajeros'), // Formulario editar pasajeros
      identiEditar = document.getElementById('identiEditar'), // Documento Editar
      nombrePersonaEditar = document.getElementById('nombrePersonaEditar'), // Nombre editar
      apellidoEditar = document.getElementById('apellidoEditar'), // apellido editar
      telefonoEditar = document.getElementById('telefonoEditar'), // Telefono editar
      correoEditar = document.getElementById('correoEditar'), // correo editar de pasajeros
      fechaEditar = document.getElementById('fechaEditar'), // Fecha editar
      nacionalidadEditar = document.getElementById('nacionalidadEditar'), // Nacionalidad Edtar
      listarRutas =  document.getElementById('listarRutas');
      modalcompra = document.getElementById('modalcompra');

    agregarDestino = document.getElementById('agregarDestino'), // Formulario rutas
    nombreRuta = document.getElementById('nombreRuta'),// Nombre de la ruta
    valorTiquete = document.getElementById('valorTiquete'), // Input valor de la ruta
    ciudadOrigen = document.getElementById('ciudadOrigen'), // Input ciudad de origen
    ciudadDestino = document.getElementById('nombreRuta'), // Input ciudad destino
    puntosFide = document.getElementById('puntosFide'), // Input puntos fidelizacion
    padreTablaDestino = document.getElementById('padreTablaDestino'), // Padre tabla tabla rutas

    agregarCompra = document.getElementById('agregarCompra'), // Formulario compra de tiquetes
    selectPasajero = document.getElementById('selectPasajero'), // Select de pasajero
    contenidoCompra = document.getElementById('contenidoCompra'), // Modal contenido de la compra
    selectRuta = document.getElementById('selectRuta'),
    padreTablaFidelizacion = document.getElementById('padreTablaFidelizacion'), // Padre tabla fidelizacion

    agregarCompra = document.getElementById('agregarCompra');

    arregloPasajeros = [],
    arregloRutas = [];
    
    let idPasajero = 0; // id pasajero para llevar control de eliminar y editar

    let idRutas  = 0;

    const agregarPasajerosArreglo = (event) => {   // Agrega pasajeros al arreglo pasajeros

    event.preventDefault();

    const pasajero = {};

    pasajero['id'] = idPasajero;
    pasajero['identi'] = identi.value;
    pasajero['nombre'] = nombrePersona.value;
    pasajero['apellido'] = apellido.value;
    pasajero['telefono'] = telefono.value;
    pasajero['correo'] = correo.value;
    pasajero['fecha'] = fecha.value;
    pasajero['nacionalidad'] = nacionalidad.value;
    pasajero['fidelizacion'] = 0;     // control puntos de fidelizacion
    idPasajero++;

    agregarPasajeros.reset();
    arregloPasajeros.push(pasajero);
    
    const opcrionPasajero = document.createElement('option');
    opcrionPasajero.textContent = `${pasajero.identi}`;
    selectPasajero.appendChild(opcrionPasajero);
    }




    const listarPasajeros = () => {   //Listar pasajeros del arregloPasajeros en el DOM

    if (arregloPasajeros.length === 0){     // Valida que hayan pasajeros
        alert('No hay usuarios en el sistema');
        return;}

    padreTablaPasajeros.innerHTML = ''; //Limpia la tabla pasajeros del DOM

    for ( pasajero of arregloPasajeros ){   // Recorre el arreglo de pasajeros

        const   // creacion de las etiquetas
                tdIden = document.createElement('th'),
                tdNom = document.createElement('td'),
                tdApe = document.createElement('td'),
                tdTel = document.createElement('td'),
                tdCorr = document.createElement('td'),
                tdFecha = document.createElement('td'),
                tdNAcio = document.createElement('td'),
                tdBotones = document.createElement('td'),
                botonEli = document.createElement('button'),
                botonEdi = document.createElement('button');
                hijoTablaPasajeros = document.createElement('tr');

        //Se añaden las clases
        tdBotones.classList.add('text-center', 'w-25');
        botonEdi.classList.add('btn', 'btn-sm',  'btn-warning', 'm-1');
        botonEli.classList.add('btn', 'btn-sm',  'btn-danger', 'm-1');

        //Atributos modal del boton editar
        botonEdi.setAttribute("data-bs-toggle","modal");
        botonEdi.setAttribute("data-bs-target","#modalEditar");

        //Asignacion de id
        botonEdi.id = `${pasajero.id}`
        botonEli.id = `${pasajero.id}`

        //Texto de las etiquetas
        tdIden.textContent = `${pasajero.identi}`;
        tdNom.textContent = `${pasajero.nombre}`;
        tdApe.textContent = `${pasajero.apellido}`;
        tdTel.textContent = `${pasajero.telefono}`;
        tdCorr.textContent = `${pasajero.correo}`;
        tdFecha.textContent = `${pasajero.fecha}`;
        tdNAcio.textContent = `${pasajero.nacionalidad}`;
        botonEdi.textContent = 'Editar';
        botonEli.textContent = 'Eliminar';

        //Union de etiquetas
        tdBotones.appendChild(botonEdi);
        tdBotones.appendChild(botonEli);
        hijoTablaPasajeros.appendChild(tdIden);
        hijoTablaPasajeros.appendChild(tdNom);
        hijoTablaPasajeros.appendChild(tdApe);
        hijoTablaPasajeros.appendChild(tdTel);
        hijoTablaPasajeros.appendChild(tdCorr);
        hijoTablaPasajeros.appendChild(tdFecha);
        hijoTablaPasajeros.appendChild(tdNAcio);
        hijoTablaPasajeros.appendChild(tdBotones);

        //Se añade el pasajero a la tabla en el DOM
        padreTablaPasajeros.appendChild(hijoTablaPasajeros);

        //Eliminar un pasajero

        const eliminarPasajero = (event) => {

            let idBorrar = event.target.id; //Obtengo el id del boton que tuvo el evento

            for ( let pasajero of arregloPasajeros ){
                if ( pasajero.id == idBorrar ){
                    let indiceBorrar = arregloPasajeros.indexOf( pasajero ); //Obtengo el indice en el array del pasajero
                    arregloPasajeros.splice(indiceBorrar,1);//Elimino el pasajero
                    if ( arregloPasajeros.length === 0 ){
                        padreTablaPasajeros.innerHTML = '';
                    }else{
                        listarPasajeros();// Cargo la lista de pasajeros actualizada
                        }

                    }
                }

                }
        
        const traerid = (event2) =>{ //Para obtener el id del boton
            
            const editarUsuario = (event) => { // Para editar el pasajero
                let idEditar = event2.target.id; //Obtengo el id del boton que tuvo el evento

                event.preventDefault();
                
                for( let pasajero of arregloPasajeros ){
                    
                    if (  pasajero.id == idEditar  ){ //Comparar id del boton con el del pasajero
            
                        let indiceEditar = arregloPasajeros.indexOf( pasajero ); //Obtengo el indice en el array del pasajero
                        console.log(indiceEditar);

                        if ( identiEditar.value != '' ){

                            for ( let i = 0; i <  selectPasajero.length; i++ ){
                                if ( selectPasajero[i].textContent == arregloPasajeros[indiceEditar].identi ){
                                    selectPasajero[i].textContent =  identiEditar.value;
                                }
                            }
                            
                            arregloPasajeros[indiceEditar].identi = identiEditar.value
                        } else{
                            arregloPasajeros[indiceEditar].identi = arregloPasajeros[indiceEditar].identi;
                        }

                        if ( nombrePersonaEditar.value != '' ){

                           let tdTablaPuntos = padreTablaFidelizacion.getElementsByTagName('td');

                           for ( let i = 0; i < tdTablaPuntos.length; i++ ){

                            if ( tdTablaPuntos[i].textContent == arregloPasajeros[indiceEditar].nombre ){
                                tdTablaPuntos[i].textContent =  nombrePersonaEditar.value;
                            }
                           }

                            arregloPasajeros[indiceEditar].nombre = nombrePersonaEditar.value;
                        } else{
                            arregloPasajeros[indiceEditar].nombre = arregloPasajeros[indiceEditar].nombre;
                        }

                        if ( apellidoEditar.value != '' ){

                            let tdTablaPuntos = padreTablaFidelizacion.getElementsByTagName('td');
 
                            for ( let i = 0; i < tdTablaPuntos.length; i++ ){
 
                             if ( tdTablaPuntos[i].textContent == arregloPasajeros[indiceEditar].apellido ){
                                 tdTablaPuntos[i].textContent =  apellidoEditar.value;
                             }
                            }
 
                             arregloPasajeros[indiceEditar].apellido = apellidoEditar.value;
                         } else{
                             arregloPasajeros[indiceEditar].apellido = arregloPasajeros[indiceEditar].apellido;
                         }

                        arregloPasajeros[indiceEditar].telefono = (telefonoEditar.value != '') ? telefonoEditar.value: arregloPasajeros[indiceEditar].telefono;

                        arregloPasajeros[indiceEditar].correo = (correoEditar.value != '') ? correoEditar.value : arregloPasajeros[indiceEditar].correo;

                        arregloPasajeros[indiceEditar].fecha = (fechaEditar.value != '') ? fechaEditar.value: arregloPasajeros[indiceEditar].fecha;

                        arregloPasajeros[indiceEditar].nacionalidad = (nacionalidadEditar.value != '') ? nacionalidadEditar.value : arregloPasajeros[indiceEditar].nacionalidad;
                        
                        editarPasajeros.reset();
                        listarPasajeros();
                        editarPasajeros.removeEventListener('submit',editarUsuario)
                    }
                }
            }

            editarPasajeros.addEventListener('submit',editarUsuario)
        }


        botonEdi.addEventListener('click',traerid);
        botonEli.addEventListener('click', eliminarPasajero);
    }
    }

    agregarPasajeros.addEventListener('submit',agregarPasajerosArreglo);

    listar.addEventListener('click',listarPasajeros)


const buscador = () => {
    if ( arregloPasajeros.length !== 0 ){

        let identificacion = buscar.value;

        for ( let pasajeros of arregloPasajeros ){
            if ( pasajeros.identi == identificacion ){

                cuerpoModalBusquedaPasajero.innerText = ''

                const pIdentificacion = document.createElement('p');
                const pNombre = document.createElement('p');
                const pApellido = document.createElement('p');
                const pTelefono = document.createElement('p');
                const pCorreo = document.createElement('p');
                const pFecha = document.createElement('p');
                const pNacionalidad = document.createElement('p');

                pIdentificacion.textContent = `Identificacion: ${pasajeros.identi}`
                pNombre.textContent = `Nombre: ${pasajeros.nombre}`
                pApellido.textContent = `Apellido: ${pasajeros.apellido}`
                pTelefono.textContent = `Telefono: ${pasajeros.telefono}`
                pCorreo.textContent = `Correo: ${pasajeros.correo}`
                pFecha.textContent = `Fecha: ${pasajeros.fecha}`
                pNacionalidad.textContent = `Nacionalidad: ${pasajeros.nacionalidad}`

                cuerpoModalBusquedaPasajero.appendChild(pIdentificacion);
                cuerpoModalBusquedaPasajero.appendChild(pNombre);
                cuerpoModalBusquedaPasajero.appendChild(pApellido);
                cuerpoModalBusquedaPasajero.appendChild(pTelefono);
                cuerpoModalBusquedaPasajero.appendChild(pCorreo);
                cuerpoModalBusquedaPasajero.appendChild(pFecha);
                cuerpoModalBusquedaPasajero.appendChild(pNacionalidad);
                
            }else{
                cuerpoModalBusquedaPasajero.innerText ='Usuario no encontrado'
            }
            buscar.value = ''
            
        }
    } else {
        cuerpoModalBusquedaPasajero.innerText = 'No hay usuarios registrados'
        buscar.value = ''
    }
}

botonBuscar.addEventListener('click', buscador)

const agregarRuta = (event) => {

    event.preventDefault();

    const ruta = {};

    ruta['id'] = idRutas;
    ruta['nombre'] = nombreRuta.value;
    ruta['valor'] = valorTiquete.value;
    ruta['ciudadOri'] = ciudadOrigen.value;
    ruta['ciudadDes'] = ciudadDestino.value;
    ruta['puntos'] = puntosFide.value;
    idRutas++;
    
    agregarDestino.reset();
    arregloRutas.push(ruta);

    const optionRutas = document.createElement('option');
    optionRutas.textContent = ruta.nombre;
    selectRuta.appendChild(optionRutas);
}

const listarViajes = () => {

    if ( arregloRutas.length === 0 ){
        alert('No hay usuarios en el sistema');
        return;
    }
    padreTablaDestino.innerHTML = '';

    for ( viaje of arregloRutas ){

        const tr = document.createElement('tr'),
              tdId = document.createElement('td'),
              tdNom = document.createElement('td'),
              tdTi = document.createElement('td'),
              tdCiuO = document.createElement('td'),
              tdCiuDes = document.createElement('td'),
              tdPun = document.createElement('td'),
              tdElim = document.createElement('td'),
              botonElimRut = document.createElement('button');
              
        tdElim.classList.add('text-center', 'w-25');
        botonElimRut.classList.add('btn', 'btn-sm',  'btn-danger', 'm-1');
        botonElimRut.type = 'button';
        botonElimRut.id = viaje.id;

        tdId.textContent = viaje.id;
        tdNom.textContent = viaje.nombre;
        tdTi.textContent = viaje.valor;
        tdCiuO.textContent = viaje.ciudadOri;
        tdCiuDes.textContent = viaje.ciudadDes;
        tdPun.textContent = viaje.puntos;
        botonElimRut.textContent = 'Eliminar';

        tdElim.appendChild(botonElimRut);
        tr.appendChild(tdId);
        tr.appendChild(tdNom);
        tr.appendChild(tdTi);
        tr.appendChild(tdCiuO);
        tr.appendChild(tdCiuDes);
        tr.appendChild(tdPun);
        tr.appendChild(tdElim);

        padreTablaDestino.appendChild(tr);

        const eliminarRuta = (event) =>{
            let idBoton = event.target.id;

            for ( let viaje of arregloRutas ){
                if ( viaje.id == idBoton){

                    let indiceElim = arregloRutas.indexOf( viaje );
                    arregloRutas.splice(indiceElim,1);
                    if ( arregloRutas.length === 0 ){
                        padreTablaDestino.innerHTML = '';
                    }else{
                        listarViajes();
                    }
                }
            }
        }
        
        
        botonElimRut.addEventListener('click', eliminarRuta)
    }
}

agregarDestino.addEventListener('submit', agregarRuta);
listarRutas.addEventListener('click', listarViajes);

const realizarCompra = (event) => {
    
    event.preventDefault();

    contenidoCompra.innerHTML = '';

    let valorCompra = 0;
    let pasajeroCompra = ''
    const ruta = selectRuta.value;
    const pasa = selectPasajero.value;
    let puntos = 0;
    
    if ( pasa == 'Seleccione el pasajero' || ruta == 'Seleccione la ruta de viaje'  ){
        error = document.createElement('p')
        error.textContent = 'Por favor selccion el pasajero y la ruta'
        contenidoCompra.appendChild(error)
        return;
    }

    for ( let viaje of arregloRutas ) {
        if ( viaje.nombre == ruta){
            let precio = parseFloat(viaje.valor)
            valorCompra = precio*0.16 + precio*0.04 + precio;
            puntos = parseFloat(viaje.puntos);
        }
    }
    
    padreTablaFidelizacion.innerHTML=''

    for ( pasajero of arregloPasajeros ){
        if (pasa.includes( pasajero.identi )){
            let puntosTotal = parseFloat(pasajero.fidelizacion) + puntos;
            pasajero.fidelizacion = puntosTotal;
            pasajeroCompra = pasajero.nombre + ' ' + pasajero.apellido;
        }

        if ( pasajero.fidelizacion != 0 ){
            const cuerpoTablaPunos = document.createElement('tr')
            cuerpoTablaPunos.innerHTML = `
            <tr>
                <td>${pasajero.nombre}</td>
                <td>${pasajero.apellido}</td>
                <td>${pasajero.fidelizacion}</td>
              </tr>
            `
            padreTablaFidelizacion.appendChild(cuerpoTablaPunos);
        }

    }
    
    resumnCompra = document.createElement('div');
    
    resumnCompra.innerHTML = `
    <p>Nombre: ${pasajeroCompra}</p>
    <p>Ruta: ${ruta}</p>
    <p>Valor: ${valorCompra}</p>
    <p>Puntos: ${puntos}</p>
    `
    contenidoCompra.appendChild(resumnCompra)




}
agregarCompra.addEventListener('submit',realizarCompra);

    // <tr>  tabla rutas
    //       <td>OttosMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMarkMark</td>
    //       <td>@mdosMarkMark</td>
    //       <td>@mdosMarkMarkMarkMark</td>
    //       <td>@mdosMarkMarkMarkMark</td>
    //       <td class="text-center w-25">
    //         <button class="btn btn-sm  btn-danger m-1" type="button" id="eliminar">Eliminar</button>
    //       </td>
    //     </tr>

    // <tr>  tabla fidelizacion
    //     <td>OttosMarkMark</td>
    //     <td>@mdosMarkMark</td>
    //   </tr>