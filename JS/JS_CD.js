/********************************************
 *    función de validación
 */

function validacion(){
  let correcto = true;
  let usuario = document.getElementById('usuario').value; //Getter
  let pass = document.getElementById('pass').value; //Getter

  //Si hay un campo vacio, con solo espacios, que tenga digitos o con menos de dos caracteres, indicara un mensaje de error.
  if(usuario == "" ||  pass.length >= 8 && pass.length <= 12){
    document.getElementById('usuarioHelp').style.visibility ="visible";
    correcto = false;
  }

  if(pass == "" || pass.length >= 8 && pass.length <= 15){
    document.getElementById('passHelp').style.visibility="visible";
    correcto = false;
  }
  
}

//Una vez el valor es cambiado, se resetean los valores y desaparece el mensaje y el borde.
function resetear(id) {
  document.getElementById(id + 'Help').style.visibility="hidden";
  document.getElementById(id).style.borderColor="lightgray";
}