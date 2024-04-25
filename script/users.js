
let botonSignUp = document.getElementById("sign-up");
let botonSignIn = document.getElementById("sign-in");



function signUp(e) {
  e.preventDefault();

  // const AreaSaludo = document.getElementById('greetingArea');
  const userName = prompt("Por favor ingrese su nombre de usuario: ");

  // Comprueba si el usuario ya existe en el LocalStorage
  const usuariosExistentes = localStorage.getItem('usuarios') || '[]';
  const usuariosArray = JSON.parse(usuariosExistentes);

  if (usuariosArray.includes(userName)) {
    alert('Este nombre de usuario ya existe. Ingresa uno diferente.');
    return;
  }

  // Guarda el usuario en el LocalStorage
  usuariosArray.push(userName);
  localStorage.setItem('usuarios', JSON.stringify(usuariosArray));

  // Muestra un mensaje de saludo
  alert(`¡Hola ${userName}! Bienvenido a Bitter&Sour Automotores.`);
  //   greetingArea.innerHTML = mensajeSaludo;
}




function signIn(e) {
  e.preventDefault();

  const userName = prompt("Por favor ingreser su nombre de usuario: ");

  const usuariosExistentes = localStorage.getItem('usuarios') || '[]';
  const usuariosArray = JSON.parse(usuariosExistentes);

  if (usuariosArray.includes(userName)) {
    alert("Bienvenido nuevamente " + userName + "!!!");
    return;
  }

  alert("Tu Usuario No existe! ... Te invitamos a suscribirte!");

}



botonSignUp.addEventListener("click", signUp);
botonSignIn.addEventListener("click", signIn);






