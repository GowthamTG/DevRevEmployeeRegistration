"use strict";
const errorShower = (id, reason) => {
    const errorInputBox = document.getElementById(id);
    errorInputBox.style.borderBottomColor = "red";
    setTimeout(() => {
        errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
    }, 5000);
    const errorTextBox = document.getElementById(id + "-error");
    errorTextBox.innerText = reason;
};
const removeError = (id, reason) => {
    const errorInputBox = document.getElementById(id);
    errorInputBox.style.borderBottomColor = "green";
    setTimeout(() => {
        errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
    }, 5000);
    const errorTextBox = document.getElementById(id + "-error");
    errorTextBox.innerText = "";
};
const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};
const hasNumber = (myString) => {
    return /\d/.test(myString);
};
const emailValidation = (emailField) => {
    const email = emailField.value;
    if (email.length === 0) {
        errorShower("email", "Email is Required");
        return false;
    }
    if (email.includes("@") === false ||
        email.includes(".") === false ||
        !validateEmail(email)) {
        errorShower("email", "Email must be in a valid form");
        return false;
    }
    removeError("email", "");
    return true;
};
const userNameValidation = (userNameField) => {
    const userName = userNameField.value;
    if (userName.length === 0) {
        errorShower("userName", "User Name is Required");
        return false;
    }
    if (hasNumber(userName)) {
        errorShower("userName", "Must not contain number");
        return false;
    }
    removeError("userName", "");
    return true;
};
const phoneNumberValidation = (phoneNumberField) => {
    const phoneNumber = phoneNumberField.value;
    console.log(phoneNumber);
    if (phoneNumber.length === 0) {
        errorShower("phone", "Phone Number is Required");
        return false;
    }
    if (/^[\+]?[(]?[6-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneNumber) === false) {
        errorShower("phone", "Phone Number must be in a valid form");
        return false;
    }
    removeError("phone", "");
    return true;
};
const ageValidation = (ageField) => {
    const age = +ageField.value;
    console.log(age);
    if (age === 0) {
        errorShower("age", "Age is Required");
        return false;
    }
    if (age < 18) {
        errorShower("age", "Age must be greater than 18");
        return false;
    }
    removeError("age", "");
    return true;
};
const flatNoValidation = (flatNoField) => {
    const flatNo = flatNoField.value;
    if (flatNo === "") {
        errorShower("flatNo", "Flat No is Required");
        return false;
    }
    if (flatNo.length < 10) {
        errorShower("flatNo", "Flat No must have less than 10 digits");
        return false;
    }
    removeError("flatNo", "");
    return true;
};
window.addEventListener("load", () => {
    const form = document.getElementById("form");
    const emailField = document.getElementById("email");
    const userNameField = document.getElementById("userName");
    const phoneNumberField = document.getElementById("phone");
    const ageField = document.getElementById("age");
    const dobField = document.getElementById("dob");
    const genderField = document.getElementById("gender");
    const flatNoField = document.getElementById("flatNo");
    const streetNameField = document.getElementById("streetName");
    const cityField = document.getElementById("city");
    const stateProvinceField = document.getElementById("stateProvince");
    emailField.addEventListener("blur", (event) => {
        emailValidation(emailField);
    });
    userNameField.addEventListener("blur", (event) => {
        userNameValidation(userNameField);
    });
    phoneNumberField.addEventListener("blur", (event) => {
        phoneNumberValidation(phoneNumberField);
    });
    ageField.addEventListener("blur", (event) => {
        ageValidation(ageField);
    });
    flatNoField.addEventListener("blur", (event) => {
        flatNoValidation(flatNoField);
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = document.getElementById("form");
        const emailField = document.getElementById("email");
        const userNameField = document.getElementById("userName");
        const phoneNumberField = document.getElementById("phone");
        const ageField = document.getElementById("age");
        const dobField = document.getElementById("dob");
        const genderField = document.getElementById("gender");
        const flatNoField = document.getElementById("flatNo");
        const streetNameField = document.getElementById("streetName");
        const cityField = document.getElementById("city");
        const stateProvinceField = document.getElementById("stateProvince");
        const designationField = document.getElementById("designation");
        const employeeData = {
            emailField: emailField.value,
            userNameField: userNameField.value,
            phoneNumberField: phoneNumberField.value,
            ageField: ageField.value,
            dobField: dobField.value,
            genderField: genderField.value,
            flatNoField: flatNoField.value,
            streetNameField: streetNameField.value,
            cityField: cityField.value,
            stateProvinceField: stateProvinceField.value,
            designationField: designationField.value,
        };
        if (emailValidation(emailField) &&
            userNameValidation(userNameField) &&
            ageValidation(ageField) &&
            phoneNumberValidation(phoneNumberField) &&
            flatNoValidation(flatNoField)) {
            alert("Data Sumitted Successfully :  " + JSON.stringify(employeeData));
        }
    });
});
//# sourceMappingURL=employeeRegistrationForm.js.map