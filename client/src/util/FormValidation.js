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
  if (state.hasOwnProperty("companyName") && state.companyName === "") {
    document.getElementById("companyname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("lastName") && state.lastName === "") {
    document.getElementById("lastname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("eventName") && state.eventName === "") {
    document.getElementById("eventname").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("date") && state.date === "") {
    document.getElementById("date").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("phoneNumber") && state.phoneNumber === "") {
    document.getElementById("phonenumber").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("role") && state.role === "select") {
    document.getElementById("role").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("occupation") && state.occupation === "") {
    document.getElementById("occupation").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("about") && state.about === "") {
    document.getElementById("about").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("description") && state.description === "") {
    document.getElementById("description").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("upload") && state.selectedFile === "") {
    document.getElementById("upload").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("contactName") && state.contactName === "") {
    document.getElementById("contactName").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("contactEmail") && state.contactEmail === "") {
    document.getElementById("email").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("address") && state.address === "") {
    document.getElementById("address").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("city") && state.city === "") {
    document.getElementById("city").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("state") && state.state === "") {
    document.getElementById("state").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("zipCode") && state.zipCode === "") {
    document.getElementById("zipcode").classList.add("is-invalid");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("contactPersonName") && state.contactPersonName === "") {
    document.getElementById("contactperson").classList.add("is-invalid");
    return { blankfield: true };
  }
  
  if (state.hasOwnProperty("companyWebsite") && state.companyWebsite === "") {
    document.getElementById("companywebsite").classList.add("is-invalid");
    return { blankfield: true };
  }

  if (state.hasOwnProperty("environmentalFocus") && state.environmentalFocus === "") {
    document.getElementById("envirofocus").classList.add("is-invalid");
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
  if (state.hasOwnProperty("companyWebsite") && !state.companyWebsite.match(/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
    document.getElementById("companywebsite").classList.add("is-invalid");
    return { website: true };
  }
}

export default validateForm;