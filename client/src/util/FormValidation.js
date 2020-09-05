function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-invalid");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-invalid");
    }
  }

  if (state.hasOwnProperty("username") && state.username === "") {
    document.getElementById("username").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("firstName") && state.firstName === "") {
    document.getElementById("firstname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("lastName") && state.lastName === "") {
    document.getElementById("lastname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("occupation") && state.ocupation === "") {
    document.getElementById("occupation").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("zipCode") && state.zipCode === "") {
    document.getElementById("zipcode").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("about") && state.about === "") {
    document.getElementById("about").classList.add("is-invalid");
    return { blankfield: true };
  }

  if (state.hasOwnProperty("state") && state.state === "") {
    document.getElementById("state").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("city") && state.email === "") {
    document.getElementById("city").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-invalid");
    return { blankfield: true };
  }

  if (state.hasOwnProperty("confirmPassword") && state.confirmPassword === "") {
    document.getElementById("confirmpassword").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (
    state.hasOwnProperty("password") &&
    state.hasOwnProperty("confirmPassword") &&
    state.password !== state.confirmPassword
  ) {
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("confirmpassword").classList.add("is-invalid");
    return { passwordmatch: true };
  }

  if (state.hasOwnProperty("phoneNumber") && !state.phoneNumber.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g)) {
    document.getElementById("phonenumber").classList.add("is-invalid");
    return { phonenumber: true };
  }
}

export default validateForm;