//Array de  productos (Autos) que alimenta dinamicamente la estructura de HTML de pagina principal
const arrayAutos = [
  {
    id: 1,
    marca: "Jeep",
    modelo: "Renegade",
    agno: "2024",
    condicion: "Nuevo",
    precio: 26490000,
    color: "Blanco",
    puertas: "5",
    motor: "3.7 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img1-jeep-renegade-nuevo.jfif"
  },
  {
    id: 2,
    marca: "Jeep",
    modelo: "Wrangler",
    agno: "2023",
    condicion: "Nuevo",
    precio: 40700000,
    color: "Rojo",
    puertas: "5",
    motor: "3.7 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img2-jeep-wrangler-nuevo.jfif"
  },
  {
    id: 3,
    marca: "Jeep",
    modelo: "Compass",
    agno: "2021",
    condicion: "Usado",
    precio: 32500000,
    color: "Blanco",
    puertas: "5",
    motor: "4.7 ",
    transmision: "Automatica",
    tipoCombustible: "Diesel",
    kilometros: "35750",
    urlFoto: "multimedia/img3-jeep-compass-usado.jfif"
  },
  {
    id: 4,
    marca: "Jeep",
    modelo: "Grand Cherokee",
    agno: "2018",
    condicion: "Usado",
    precio: 28000000,
    color: "Negro",
    puertas: "5",
    motor: "4.7 ",
    transmision: "Automatica",
    tipoCombustible: "Nafta",
    kilometros: "56600",
    urlFoto: "multimedia/img4-jeep-grand-cherokee-usado.jfif"
  },
  {
    id: 5,
    marca: "Fiat",
    modelo: "Chronos",
    agno: "2024",
    condicion: "Nuevo",
    precio: 35600000,
    color: "Plata",
    puertas: "5",
    motor: "2.0 ",
    transmision: "Automatico",
    tipoCombustible: "Diesel",
    kilometros: "0",
    urlFoto: "multimedia/img5-fiat-chronos-nuevo.jfif"
  },
  {
    id: 6,
    marca: "Fiat",
    modelo: "Pulse",
    agno: "2023",
    condicion: "Nuevo",
    precio: 31500000,
    color: "Rojo",
    puertas: "5",
    motor: "1.6 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img6-fiat-pulse-nuevo.jfif"
  },
  {
    id: 7,
    marca: "Fiat",
    modelo: "Mobi",
    agno: "2020",
    condicion: "Usado",
    precio: 22300000,
    color: "Negro",
    puertas: "5",
    motor: "1.3 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "65000",
    urlFoto: "multimedia//img7-fiat-mobi-usado.jfif"
  },
  {
    id: 8,
    marca: "Fiat",
    modelo: "Argo",
    agno: "2020",
    condicion: "Usado",
    precio: 32000000,
    color: "Azul",
    puertas: "5",
    motor: "1.6 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "80000",
    urlFoto: "multimedia/img8-fiat-argo-usado.jfif"
  },
  {
    id: 9,
    marca: "Peugeot",
    modelo: "208",
    agno: "2024",
    condicion: "Nuevo",
    precio: 29900000,
    color: "Verde",
    puertas: "5",
    motor: "2.0 ",
    transmision: "Automatica",
    tipoCombustible: "Diesel",
    kilometros: "0",
    urlFoto: "multimedia/img9-peugeot-208-nuevo.jfif"
  },
  {
    id: 10,
    marca: "Peugeot",
    modelo: "308",
    agno: "2023",
    condicion: "Nuevo",
    precio: 45000000,
    color: "Rojo",
    puertas: "5",
    motor: "2.0 ",
    transmision: "Automatica",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img10-peugeot-308-nuevo.jfif"
  },
  {
    id: 11,
    marca: "Peugeot",
    modelo: "206",
    agno: "2021",
    condicion: "Usado",
    precio: 19700000,
    color: "Azul",
    puertas: "5",
    motor: "1.6 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "23000",
    urlFoto: "multimedia/img11-peugeot-206-usado.jfif"
  },
  {
    id: 12,
    marca: "Peugeot",
    modelo: "207",
    agno: "2018",
    condicion: "Usado",
    precio: 19700000,
    color: "Negro",
    puertas: "5",
    motor: "1.3 ",
    transmision: "Automatica",
    tipoCombustible: "Nafta",
    kilometros: "72000",
    urlFoto: "multimedia/img12-peugeot-207-usado.jfif"
  },
  {
    id: 13,
    marca: "Ford",
    modelo: "Focus",
    agno: "2023",
    condicion: "Nuevo",
    precio: 43000000,
    color: "Verde",
    puertas: "5",
    motor: "2.0 ",
    transmision: "Automatica",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img13-ford-focus-nuevo.jfif"
  },
  {
    id: 14,
    marca: "Ford",
    modelo: "Fiesta",
    agno: "2023",
    condicion: "Nuevo",
    precio: 32000000,
    color: "Amarillo",
    puertas: "5",
    motor: "1.3 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "0",
    urlFoto: "multimedia/img14-ford-fiesta-nuevo.jfif"
  },
  {
    id: 15,
    marca: "Ford",
    modelo: "KA",
    agno: "2017",
    condicion: "Usado",
    precio: 15000,
    color: "Plata",
    puertas: "2",
    motor: "0.9 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "115000",
    urlFoto: "multimedia/img15-ford-ka-usado.jfif"
  },
  {
    id: 16,
    marca: "Ford",
    modelo: "Eco Sport",
    agno: "2018",
    condicion: "Usado",
    precio: 33000000,
    color: "blanco",
    puertas: "5",
    motor: "2.6 ",
    transmision: "Manual",
    tipoCombustible: "Nafta",
    kilometros: "88000",
    urlFoto: "multimedia/img16-ford-ecosport-usado.jfif"
  }
]

//Elementos del DOM a Modificar
const contenedorPrincipal = document.getElementById("contenedor");  //Obtiene el elemento contenedor elementos de autos. OK
const tituloMain = document.getElementById("titulo-main");  //Obtiene nombre del titulo del MAIN. OK
let enlacesMarcas = document.getElementsByClassName("enlace");  //Obtiene los elementos HTML de los enlaces de consulta (NavTab)
let botonDetalles = document.getElementsByClassName("boton-ver-detalles");//Obtiene los elementos boton detalle(Pendiente por realizar)
let contenedorDetallesAutos = document.getElementById("modal");//Obtiene el contenedor de informacion de detalles
let botonCerrar = document.querySelector('.cerrar')
let autosFavoritos = [];
let autosDetalles =[];

//********************** Seccion Principal que muestra card de autos segun criterio ************* */

cargarAutos(arrayAutos);  //Al iniciar la pagina se cargan  TODOS los autos sin ningun tipo de filtro

//Funcion para cargar dinamicamente TODOS los autos al contenedor principal del HTML
function cargarAutos(autos) {
  contenedorPrincipal.innerHTML = ""; //Resetea el contenedor para iniciar con un array vacio
  for (const auto of autos) { //Recorre todos los elementos del array que se pasa como parametro
    divElemento = document.createElement("div"); // Crea el elemento de referencia donde se insertara dinamicamente informacion
    divElemento.classList.add("contenedor-elementos");
    divElemento.setAttribute("id", "contenedor-elementos");
    divElemento.innerHTML = ` 

        <img src="${auto.urlFoto}" alt="${auto.modelo}" class="imagen-items">
        <p class="nom-items"><span class="titulo-items">${auto.marca}   ${auto.modelo}  ${auto.agno}</span></p>
        <p class="condicion-items"><span class="titulo-items"> ${auto.condicion}</span></p>
        <p class="precio-items"><span class="precio-item">AR$ ${auto.precio}</span></p>
        <button class="boton-ver-detalles button" id="${auto.id}"> Ver Detalles </button>
        <button class="boton-simula-credito button" id="${auto.id}"> Simula Tu credito </button>
        <i class="fa-solid fa-heart corazon-favorito" id="${auto.id}"></i>
        `;

    contenedorPrincipal.append(divElemento); //Agrega cada elemento creado dentro del contenedor principal del DOM
  }

  //Asignar Evento boton favorito de tarjetas
  let corazonFavorito = document.getElementsByClassName("corazon-favorito");

  for (const btnFavorito of corazonFavorito) {
    btnFavorito.addEventListener('click', () => {
      let autosFavoritos = autos.find(auto => auto.id == btnFavorito.id);
      agregarFavoritos(autosFavoritos);
    })
  }
  
  //Asignar Evento boton mostrar detalles
  let botonDetalles = document.getElementsByClassName("boton-ver-detalles");
  for (const detalle of botonDetalles) {
    detalle.addEventListener('click', (e) => {
      e.preventDefault();
      let autosDetalles = autos.find(auto => auto.id == detalle.id);
      mostrarDetalles(autosDetalles);
    })
  }
}



//Funcion para agregar autos a favoritos
function agregarFavoritos(auto) {
  autosFavoritos.push(auto);
  const jsonAutosFavoritos = JSON.stringify(autosFavoritos);
  localStorage.setItem('favoritos', jsonAutosFavoritos);
  cantFav = autosFavoritos.length;
  let numeroFavorito = document.getElementById("numero");
  numeroFavorito.innerHTML = `${cantFav}`;
  const jsonNumeroFavorito = JSON.stringify(numeroFavorito.innerHTML);
  localStorage.setItem('numeroFavoritos', jsonNumeroFavorito);
}


//Asignacion de eventos a boton de favoritos GENERAL
botonTodosFavoritos = document.querySelector(".logo-corazon");

botonTodosFavoritos.addEventListener("click", () => {
  cargarAutos(autosFavoritos);
  let tituloMain = document.getElementById("titulo-main");
  tituloMain.innerHTML = "Esta es tu lista de Autos Favoritos!"
});

function vaciarFavoritos() {
  autosFavoritos = [];
  numeroFavorito.innerHTML = '';
}


//Bucle: for...of  para asignar un Manejador de Eventos a cada enlace (link) de MARCA de autos y filtar por esa propiedad
for (const link of enlacesMarcas) {//Recorre los elementos del array de objetos enlacesMarcas  para asignarle eventos a cada enlace (link)

  link.addEventListener("click", (e) => {
    const selectPropiedadMarca = arrayAutos.find(auto => auto.marca === e.currentTarget.innerText);
    if (e.currentTarget.getAttribute("id") != "autos-todos") {
      tituloMain.innerText = `Marca Mostrada:     ${selectPropiedadMarca.marca.toUpperCase()}`;
      let autosPorMarca = arrayAutos.filter(auto => auto.marca === e.currentTarget.innerText);//Crea un array filtrado por marca
      cargarAutos(autosPorMarca); //Carga la pagina solo con los auto filtrados por marca

    } else {
      tituloMain.innerText = `Filtro:  TODOS LOS AUTOS`;
      cargarAutos(arrayAutos);

    }
  })
}


//************************************** Inicio Seccion Mostrar Modal Detalles********************* */
//Seccion Mostrar detalles
function mostrarDetalles(autosDetalles) {

  contenedorDetallesAutos.innerHTML = ""; //Resetea el contenedor para iniciar con un array vacio
  contenedorDetallesAutos.innerHTML = ` 

      <div class="modal-contenedor" id="contenedor-caracteristicas">
        <div class="tabla-caracteristicas" id="tabla-caracteristicas">
      
          <h1>${autosDetalles.marca}   ${autosDetalles.modelo}  ${autosDetalles.agno}</h1>

          <h3 class="titulo-caracteristica">Color</h3>
          <h3 class="valor-caracteristica">${autosDetalles.color}</h3>

          <h3 class="titulo-caracteristica">Puertas</h3>
          <h3 class="valor-caracteristica">${autosDetalles.puertas}</h3>

          <h3 class="titulo-caracteristica">Motor</h3>
          <h3 class="valor-caracteristica">${autosDetalles.motor}</h3>

          <h3 class="titulo-caracteristica">Transmision</h3>
          <h3 class="valor-caracteristica">${autosDetalles.transmision}</h3>

          <h3 class="titulo-caracteristica">Tipo Combustible</h3>
          <h3 class="valor-caracteristica">${autosDetalles.tipoCombustible}</h3>

          <h3 class="titulo-caracteristica">Kilometros</h3>
          <h3 class="valor-caracteristica">${autosDetalles.kilometros}</h3>
        </div>
      
        <div class="tabla-imagen" id="tabla-imagen">
        <img src="${autosDetalles.urlFoto}" alt="${autosDetalles.modelo}" >
        <i class="fa-regular fa-rectangle-xmark cerrar"></i>        
        </div>

      </div>
    `;

    contenedorDetallesAutos.style.opacity = "1"
    contenedorDetallesAutos.style.pointerEvents = "unset"

    // Agregar de evento al botón de cierre
    botonCerrar = document.querySelector('.cerrar')
    botonCerrar.addEventListener('click', ocultarModal);
    
}

// Función para ocultar la ventana modal
function ocultarModal(e) {
  e.preventDefault();
  contenedorDetallesAutos.style.opacity = "0"
  contenedorDetallesAutos.style.pointerEvents = "none";
}

//************************************** Fin Seccion Mostrar Modal Detalles********************* */





//Funcion: simulacion de credito en cuotas
function simularCredito(evento) {

  evento.preventDefault()

  //Declaracion de Variables
let tasaNomAnual;
let cantAgnos;
let numeroTotalCuotas;
let tasaIntEquiv;
let costoAutoElegido;
let montoFinanciar;
let anticipo;

// Entrada de datos
costoAutoElegido = parseInt(document.querySelector("#valor-auto").value);
anticipo = parseInt(document.getElementById("monto-anticipo").value);

//Monto a financiar para la adquisicion del auto
montoFinanciar = costoAutoElegido - anticipo;

// Entrada de datos para calculo del financiamiento
tasaNomAnual = parseFloat(document.getElementById("tasa-finac").value);

cantAgnos = parseFloat(document.getElementById("cant-agnos").value);

//Calculo de numero total de cuotas a financiar
numeroTotalCuotas = 12 * cantAgnos;

//Calculo de tasa de interes equivalente
tasaIntEquiv = tasaNomAnual / 12;

//Funcion para calcular Tasa Efectiva Anual
function calcularTea(tasaNomAnual, numeroTotalCuotas) {
  return ((Math.pow(1 + (tasaNomAnual / 100) / numeroTotalCuotas, numeroTotalCuotas) - 1) * 100);
}

tea = calcularTea(tasaNomAnual, numeroTotalCuotas);

//Calculo de valor de la cuota de amortizacion
let pmt = montoFinanciar * (tasaIntEquiv / 100) / (1 - Math.pow(1 + (tasaIntEquiv / 100), -numeroTotalCuotas));

  // Ciclo para calcular los pagos de todas las cuotas
  let saldoInicial = montoFinanciar;
  let arrayAmortizacion = [] //array vacio a llenar por iteracion

  for (let i = 0; i < numeroTotalCuotas; i++) {
    let intereses = saldoInicial * tasaIntEquiv / 100;
    let amortizacion = pmt - intereses;
    let saldoFinal = saldoInicial - amortizacion;

    arrayAmortizacion[i] = [[i], saldoInicial.toFixed(2), amortizacion.toFixed(2), intereses.toFixed(2), saldoFinal.toFixed(2)]

    saldoInicial = saldoFinal;
  }

  for (let i = 0; i < numeroTotalCuotas; i++) {
    let divTablaAmort = document.getElementById("cuerpo-tabla-amortizacion") //elemento del DOM de referencia
    let divNuevoAnidado = document.createElement("div");
    divNuevoAnidado.classList.add("tabla-amortizacion");
    divNuevoAnidado.setAttribute("id", "columnas-tabla-amortizacion")
    let cuotasGeneradas = `<p>${i + 1}</p><p>${arrayAmortizacion[i][1]}</p><p>${arrayAmortizacion[i][2]}</p><p>${arrayAmortizacion[i][3]}</p><p>${arrayAmortizacion[i][4]}</p>`;
    divNuevoAnidado.innerHTML = cuotasGeneradas

    divTablaAmort.append(divNuevoAnidado);

  }
}

//Funcion para limpiar campos de datos entrada
function limpiarCampos () {
  let divTablaAmort = document.getElementById("cuerpo-tabla-amortizacion") //elemento del DOM de referencia
  document.querySelector("#valor-auto").value = "";
  document.getElementById("monto-anticipo").value = "";
  document.getElementById("tasa-finac").value= "";
  document.getElementById("cant-agnos").value = "";
  divTablaAmort.innerHTML = ""
}


let botonSimulaCredito = document.getElementById("boton-simula-credito");
botonSimulaCredito.addEventListener ("click", simularCredito );

let botonLimpiarCampos = document.getElementById("boton-limpiar-campos");
botonLimpiarCampos.addEventListener("click", limpiarCampos );









// // ******************************** Inicio Seccion Simulacion de credito**********************************
// //Funcion: simulacion de credito en cuotas
// function simularCredito(evento) {

//   evento.preventDefault()

//   //Declaracion de Variables
//   let tasaNomAnual;
//   let cantAgnos;
//   let numeroTotalCuotas;
//   let tasaIntEquiv;
//   let costoAutoElegido;
//   let montoFinanciar;
//   let anticipo;

//   // Entrada de datos
//   costoAutoElegido = parseInt(document.querySelector("#valor-auto").value);
//   anticipo = parseInt(document.getElementById("monto-anticipo").value);

//   //Monto a financiar para la adquisicion del auto
//   montoFinanciar = costoAutoElegido - anticipo;

//   // Entrada de datos para calculo del financiamiento
//   tasaNomAnual = parseFloat(document.getElementById("tasa-finac").value);

//   cantAgnos = parseFloat(document.getElementById("cant-agnos").value);

//   //Calculo de numero total de cuotas a financiar
//   numeroTotalCuotas = 12 * cantAgnos;

//   //Calculo de tasa de interes equivalente
//   tasaIntEquiv = tasaNomAnual / 12;

//   //Funcion para calcular Tasa Efectiva Anual
//   function calcularTea(tasaNomAnual, numeroTotalCuotas) {
//     return ((Math.pow(1 + (tasaNomAnual / 100) / numeroTotalCuotas, numeroTotalCuotas) - 1) * 100);
//   }

//   tea = calcularTea(tasaNomAnual, numeroTotalCuotas);

//   //Calculo de valor de la cuota de amortizacion
//   let pmt = montoFinanciar * (tasaIntEquiv / 100) / (1 - Math.pow(1 + (tasaIntEquiv / 100), -numeroTotalCuotas));

//   // Ciclo para calcular los pagos de todas las cuotas
//   let saldoInicial = montoFinanciar;
//   let arrayAmortizacion = [] //array vacio a llenar por iteracion

//   for (let i = 0; i < numeroTotalCuotas; i++) {
//     let intereses = saldoInicial * tasaIntEquiv / 100;
//     let amortizacion = pmt - intereses;
//     let saldoFinal = saldoInicial - amortizacion;

//     arrayAmortizacion[i] = [[i], saldoInicial.toFixed(2), amortizacion.toFixed(2), intereses.toFixed(2), saldoFinal.toFixed(2)]

//     saldoInicial = saldoFinal;
//   }

//   for (let i = 0; i < numeroTotalCuotas; i++) {
//     let divTablaAmort = document.getElementById("cuerpo-tabla-amortizacion") //elemento del DOM de referencia
//     let divNuevoAnidado = document.createElement("div");
//     divNuevoAnidado.classList.add("tabla-amortizacion");
//     divNuevoAnidado.setAttribute("id", "columnas-tabla-amortizacion");
//     let cuotasGeneradas = `<p>${i + 1}</p><p>${arrayAmortizacion[i][1]}</p><p>${arrayAmortizacion[i][2]}</p><p>${arrayAmortizacion[i][3]}</p><p>${arrayAmortizacion[i][4]}</p>`;
//     divNuevoAnidado.innerHTML = cuotasGeneradas

//     divTablaAmort.append(divNuevoAnidado);

//   }
// }

// //Funcion para limpiar campos de datos entrada
// function limpiarCampos() {
//   let divTablaAmort = document.getElementById("cuerpo-tabla-amortizacion") //elemento del DOM de referencia
//   document.querySelector("#valor-auto").value = "";
//   document.getElementById("monto-anticipo").value = "";
//   document.getElementById("tasa-finac").value = "";
//   document.getElementById("cant-agnos").value = "";
//   divTablaAmort.innerHTML = ""
// }

// let botonSimulaCredito = document.getElementById("boton-simula-credito");
// botonSimulaCredito.addEventListener("click", simularCredito);

// let botonLimpiarCampos = document.getElementById("boton-limpiar-campos");
// botonLimpiarCampos.addEventListener("click", limpiarCampos);

// // ******************************** Fin Seccion Simulacion de credito**********************************

















