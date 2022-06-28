let captcha = new Array();
tries = 5

function Age(birthdate) {
  var birthday = new Date(birthdate)
  var today = new Date();
  var thisYear = 0;
  if (today.getMonth() < birthday.getMonth()) {
      thisYear = 1;
  } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
      thisYear = 1;
  }
  var age = today.getFullYear() - birthday.getFullYear() - thisYear;
  return age;
}

function validateAge() {
  const birthdatestring = document.getElementById("date");
  birthday = birthdatestring.value;
  age = Age(birthday);
  $.getJSON("https://api.ipify.org?format=json", 
  function(data) {
  console.log(`{
    "Username": "${data.ip}",
    "Age": "${age}"
  }`)
});
}

function getAge() {
  const activeCaptcha = document.getElementById("captcha");
  activeCaptcha.innerText = "Age"
  const reset = document.getElementById("reset")
  reset.remove()
  const birthday = document.getElementsByClassName("input")
  birthday[0].innerHTML = `<input type="date" placeholder="12/18/2005" name="date" id="date"> </input>`
  const submit = document.getElementById("submitbox")
  submit.innerHTML = ` <input type="button" value="Submit" onclick="validateAge()"/>`
}

function createCaptcha() {
  tries = tries - 1
  if (tries == 1) {
    const errCaptcha = document.getElementById("errCaptcha");
    const reCaptcha = document.getElementById("reCaptcha");
    errCaptcha.innerHTML = "We couldn't verify your age.";
    reCaptcha.remove()

  } else {
  const activeCaptcha = document.getElementById("captcha");
  for (q = 0; q < 6; q++) {
    if (q % 2 == 0) {
      captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    } else {
      captcha[q] = Math.floor(Math.random() * 10 + 0);
    }
  }
  theCaptcha = captcha.join("");
  activeCaptcha.innerHTML = `${theCaptcha}`;
}
}


function validateCaptcha() {
  const errCaptcha = document.getElementById("errCaptcha");
  const reCaptcha = document.getElementById("reCaptcha");
  recaptcha = reCaptcha.value;
  let validateCaptcha = 0;
  for (var z = 0; z < 6; z++) {
    if (recaptcha.charAt(z) != captcha[z]) {
      validateCaptcha++;
    }
  }
  if (recaptcha == "") {
    errCaptcha.innerHTML = "Re-Captcha must be filled";
  } else if (validateCaptcha > 0 || recaptcha.length > 6) {
    errCaptcha.innerHTML = "Wrong captcha";
    createCaptcha();
  } else {
    getAge()
  }
}
