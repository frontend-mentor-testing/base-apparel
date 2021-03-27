const email = document.querySelector(".email-input");
const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

function validateForm() {
  if (check.test(email.value)) {
    email.value = "";
    email.value = "Thanks ! We will reach out to you soon";
    return true;
  }
  email.style.color = "hsl(0, 93%, 68%)";
  email.value = "Please enter a valid email address !";
  return false;
}
