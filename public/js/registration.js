

document.getElementById("greeting").innerHTML = '<h1>Greetings!</h1>';

createForm(function(){
  document.getElementById('reg-button').addEventListener("click", function(e){
    e.preventDefault();
    let inputValue = document.getElementById("registration-name").value;
    console.log(inputValue);
  })
});


// Create form needs to make different questions but create same type of form
function createForm(callback){
  let f = document.createElement("form");
  f.setAttribute("class", "register-user");
  f.appendChild(askName());
  let i = document.createElement("input");
  i.setAttribute("type", "text");
  i.setAttribute("id", "registration-name");
  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  s.setAttribute("id", "reg-button");
  f.appendChild(i);
  f.appendChild(s);
  document.getElementById("form-container").appendChild(f);
  callback();
}

function askName(){
  let h = document.createElement("h1");
  let t = document.createTextNode("¿Cual es tu nombre?");
  h.appendChild(t);
  return h;
}

function Person(name, email){
  this.name = name;
  this.email = email;
}

/****************** Reference from Stackoverflow *********************/

// var f = document.createElement("form");
// f.setAttribute('method',"post");
// f.setAttribute('action',"submit.php");
//
// var i = document.createElement("input"); //input element, text
// i.setAttribute('type',"text");
// i.setAttribute('name',"username");
//
// var s = document.createElement("input"); //input element, Submit button
// s.setAttribute('type',"submit");
// s.setAttribute('value',"Submit");
//
// f.appendChild(i);
// f.appendChild(s);
//
// //and some more input elements here
// //and dont forget to add a submit button
//
// document.getElementsByTagName('body')[0].appendChild(f);
