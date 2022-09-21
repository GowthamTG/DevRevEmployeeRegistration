"use strict";
const errorShower = (id) => {
  const errorInputBox = document.getElementById(id);
  errorInputBox.style.borderBottomColor = "red";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
};
const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
window.addEventListener("load", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const userName = document.getElementById("userName").value;
    const phoneNumber = +document.getElementById("phone").value;
    const age = +document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const flatNo = document.getElementById("flatNo").value;
    const streetName = document.getElementById("streetName").value;
    const city = document.getElementById("city").value;
    const stateProvince = document.getElementById("stateProvince").value;
    console.log("VALIDATING");
    console.log(userName);
    let isValid = true;
    if (
      email.includes("@") === false ||
      email.includes(".") === false ||
      !validateEmail(email)
    ) {
      errorShower("email");
      isValid = false;
    }
    if (userName.length < 2 || userName.length > 15) {
      errorShower("userName");
      isValid = false;
    }
    if (phoneNumber.toString().length < 10) {
      errorShower("phone");
      isValid = false;
    }
    if (age < 18) {
      errorShower("age");
      isValid = false;
    }
    if (dob.length <= 0) {
      errorShower("dob");
      isValid = false;
    }
    if (gender.length <= 0) {
      errorShower("gender");
      isValid = false;
    }
    if (flatNo.length <= 0) {
      errorShower("flatNo");
      isValid = false;
    }
    if (streetName.length <= 0) {
      errorShower("streetName");
      isValid = false;
    }
    if (city.length <= 0) {
      errorShower("city");
      isValid = false;
    }
    if (stateProvince.length <= 0) {
      errorShower("stateProvince");
      isValid = false;
    }
    if (isValid) {
      console.log("Data Submitted Successfully");
    }
    const employeeData = {
      email: email,
      userName: userName,
      phoneNumber: phoneNumber,
      age: age,
      dob: dob,
      gender: gender,
      flatNo: flatNo,
      streetName: streetName,
      city: city,
      stateProvince: stateProvince,
    };
    console.log(employeeData);
    if (isValid)
      alert("Data Sumitted Successfully :  " + JSON.stringify(employeeData));
  });
});
//# sourceMappingURL=employeeRegistrationForm.js.map
