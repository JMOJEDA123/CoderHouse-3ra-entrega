//Elementos HTML
let botonSignUp = document.getElementById("sign-up");
let botonSignIn = document.getElementById("sign-in");


//Asignacion de eventos a Botones
botonSignUp.addEventListener("click", registrar);
botonSignIn.addEventListener("click", ingresar);

usuarioActivo = JSON.parse(sessionStorage.getItem("usuActivo"));
let loginUsuario = document.querySelector(".login-usuario");
loginUsuario.innerHTML = `Usuario: ${usuarioActivo} `;


function actualizarUsuario (userName){
  let loginUsuario = document.querySelector(".login-usuario");
  usuarioActualizado = localStorage.getItem("usuActivo")
  loginUsuario.innerHTML = `Usuario: ${userName} `;
  
}


//************************************************************************************************* */

//Inicio Funcion Signup (Registrarse)
function registrar(e) {
  e.preventDefault();

  (async () => {
    const { value: userName } = await Swal.fire({
      title: "Por Favor Ingresa un Nombre de Usuario",
      position: "center",
      input: "text",
      inputPlaceholder: "Username",
      inputValue: "",
      showCancelButton: true,
     toast:"true",
    });

        // Comprobar si el usuario ya existe en el LocalStorage
    const usuariosExistentes = localStorage.getItem('usuarios') || '[]';
    const usuariosArray = JSON.parse(usuariosExistentes);
  
    if (usuariosArray.includes(userName)) {
      // Muestra un mensaje de bienvenida
      Swal.fire({
        title: `Tu Nombre de Usuario Ya Existe!  Selecciona Otro Nombre!`,
        icon: "error",
      });

    }else {
    // Guarda el usuario en el LocalStorage
      usuariosArray.push(userName);
      Swal.fire({
        title: `Gracias Por Registrate ${userName}!!!`,
        icon: "success",
      });
    }

  })();
}
//Fin Funcion Signup (registrarse)



//************************************************************************************************* */



//Inicio Funcion INGRESAR
function ingresar(e) {
  e.preventDefault();

  (async () => {
    const { value: userName } = await Swal.fire({
      title: "Por Favor Ingresa Tu Nombre de Usuario",
      position: "center",
      input: "text",
      inputPlaceholder: "Username",
      inputValue: "",
      showCancelButton: true,
    });

    let usuariosExistentes = localStorage.getItem('usuarios') || '[]';
    let usuariosArray = JSON.parse(usuariosExistentes);

    // Comprobar si el usuario ya existe en el LocalStorage
    if (usuariosArray.includes(userName)) {
      sessionStorage.removeItem('usuActivo');
      localStorage.setItem('usuarios', JSON.stringify(usuariosArray));
      sessionStorage.setItem('usuActivo', JSON.stringify(userName));
      actualizarUsuario(userName);
      Swal.fire({
        title: `Nos Alegra Verte Nuevamente ${userName}!!!`,
        icon: "success",
      });
    } else {
      // Muestra un mensaje de saludo
      Swal.fire({
        title: "Tu Nombre de Usuario No existe! Te invitamos a Suscribirte!",
        icon: "error",
      });
    }

  })();
}
//Fin Funcion Signin (Ingresar)








