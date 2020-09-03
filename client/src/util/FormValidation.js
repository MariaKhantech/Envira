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
  if (state.hasOwnProperty("firstname") && state.firstname === "") {
    document.getElementById("firstname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("lastname") && state.lastname === "") {
    document.getElementById("lastname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (
    state.hasOwnProperty("verificationcode") &&
    state.verificationcode === ""
  ) {
    document.getElementById("verificationcode").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
    document.getElementById("oldpassword").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
    document.getElementById("newpassword").classList.add("is-invalid");
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
}

export default validateForm;