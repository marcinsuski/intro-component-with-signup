const form = document.querySelector('.form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
  if(firstName === ''){
    errorFunc(fname, 'First Name cannot be empty')
  } 
  else {
    successFunc(fname)
  }
  
  
  if(lastName === ''){
    errorFunc(lname, 'Last Name cannot be empty')
  } 
  else {
    successFunc(lname)
  }


  if(emailValue === ''){
    errorFunc(email, 'First Name cannot be empty')
  } else if (!emailValue.match(pattern)){
    errorFunc(email, 'Looks like not an email')

  }
  else {
    successFunc(email)
  }


  if(passwordValue === ''){
    errorFunc(password, 'Password cannot be empty')
  } 
  else {
    successFunc(password)
  }
})




function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  req.className += 'error';
  span.className += 'error_msg';
  if( req !== email){
    req.value = ' ';
  } else {
    req.style.color = 'hsl(0, 100%, 74%);'
  }
}

function successFunc(req) {
  req.className += 'success';
}