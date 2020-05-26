function showMenu() {
  document.getElementById("sidebar").classList.toggle("show");
}

// Implement backend for the form submission and data processing
function validation(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  if(name.length < 1){
    text = "Please enter your name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 1){
    text = "Please enter the subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please enter a valid phone number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter a valid email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 1){
    text = "Please enter a message";
    error_message.innerHTML = text;
    return false;
  }
  error_message.style.padding = "0";
  action("https://formspree.io/xpzypdwr")
  return true;
}
