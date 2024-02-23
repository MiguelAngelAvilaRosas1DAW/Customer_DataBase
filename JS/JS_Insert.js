/********************************************
 *    función de validación
 */

function validacion(){
    let correcto = true;
    let nameUser = document.getElementById('nameUser').value; //Getter
    let Ape1User = document.getElementById('Ape1User').value; //Getter
    let Phone = document.getElementById('Phone').value; //Getter
    let Price = document.getElementById('Price').value; //Getter
    let Province = document.getElementById('Province').value; //Getter
    let email = document.getElementById('Email').value; //Getter
    let normalBookingChecked = document.getElementById('normalBooking').checked; //Getter
    let birthdayBookingChecked = document.getElementById('birthdayBooking').checked; //Getter
    let otherBookingChecked = document.getElementById('otherBooking').checked; //Getter
    let terminos = document.getElementById('terminos').checked; //Getter

  //Si hay un campo vacio, con solo espacios, que tenga digitos o con menos de dos caracteres, indicara un mensaje de error.
  if(nameUser == ""){
    document.getElementById('nameUserHelp').style.visibility ="visible";
    correcto = false;
  }

  if(Ape1User == ""  || !(Ape1User.length >= 5 && Ape1User.length <= 12)){
    document.getElementById('Ape1UserHelp').style.visibility ="visible";
    correcto = false;
  }

  if(Phone == ""  || !(Phone.length == 9) || ! /[0-9]/.test(Phone)){
    document.getElementById('PhoneHelp').style.visibility ="visible";
    correcto = false;
  }

  if(Price == ""  || !(Price.length > 1) || ! /[0-9]/.test(Price)){
    document.getElementById('PriceHelp').style.visibility ="visible";
    correcto = false;
  }

  if(Province == 0){
    document.getElementById('ProvinceHelp').style.visibility="visible";
    correcto = false;
  }

  if (!normalBookingChecked && !birthdayBookingChecked && !otherBookingChecked) {
    document.getElementById('inputRadioHelp').style.visibility = "visible";
    correcto = false;
  }

  if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('EmailHelp').style.visibility = "visible";
    correcto = false;

  }

  if (!terminos) {
    document.getElementById('terminosHelp').style.visibility = "visible";
    correcto = false;
  }

  return correcto;
}

//Una vez el valor es cambiado, se resetean los valores y desaparece el mensaje y el borde.
function resetear(id) {
  document.getElementById(id + 'Help').style.visibility="hidden";
}