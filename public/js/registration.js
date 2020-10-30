let newUser = {
  name: '',
  email: '',
  password: ''
}

greeting();

createQuestion();

function createQuestion(){
  createForm("¿Cual es tu nombre?", function(){
    //console.log(addButtonEvent('reg-button'));
    //let inputValue = addButtonEvent('reg-button');

    // addButtonEvent('reg-button', function(){
    //       let inputValue = document.getElementById("registration-name").value;
    //       console.log(inputValue);
    // });
  });
}

function showMessage(){
  document.getElementById("greeting").innerHTML = '<h1>Por favor enviar informacion correcta</h1>';
}

function greeting(){
  document.getElementById("greeting").innerHTML = '<h1>Saludos!</h1>';
  window.onload = (event) => {
    $('#greeting > h1').hide(6000);
  };
}

function clearForm(){
      const container = document.querySelector('#form-container');
      removeAllChildNodes(container);
}

function addButtonEvent(buttonId){
  let input_text = '';
  document.getElementById(buttonId).addEventListener('click', function(){
    input_text = document.getElementById("registration-name").value;
    console.log('Inside event listener ' + input_text);
    return input_text;
  });
}

// Pregunta cual es tu email after click on form
// Create form needs to make different questions but create same type of form
function createForm(question, callback){
  let form = document.createElement("form");
  form.setAttribute("class", "register-user");
  form.appendChild(askInput(question));
  let inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("id", "registration-name");
  let inputButton = document.createElement("input");
  inputButton.setAttribute("type", "button");
  inputButton.setAttribute("value", "Enviar");
  inputButton.setAttribute("id", "reg-button");
  form.appendChild(inputBox);
  form.appendChild(inputButton);
  document.getElementById("form-container").appendChild(form);
  callback();
}

function askInput(question){
  let header = document.createElement("h1");
  let textNode = document.createTextNode(question);
  header.appendChild(textNode);
  return header;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
