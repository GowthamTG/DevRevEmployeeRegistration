"use strict";
const errorShower = (id, reason) => {
    console.log(id);
    const errorInputBox = document.getElementById(id);
    errorInputBox.style.borderBottomColor = "red";
    setTimeout(() => {
        errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
    }, 5000);
    const errorTextBox = document.getElementById(id + "-error");
    console.log(errorTextBox);
    errorTextBox.innerText = reason;
};
const removeError = (id, reason) => {
    console.log(id);
    const errorInputBox = document.getElementById(id);
    errorInputBox.style.borderBottomColor = "green";
    setTimeout(() => {
        errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
    }, 5000);
    const errorTextBox = document.getElementById(id + "-error");
    console.log(errorTextBox);
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
    if (flatNo.length > 10) {
        errorShower("flatNo", "Flat No must have less than 10 digits");
        return false;
    }
    removeError("flatNo", "");
    return true;
};
const streetNameValidation = (streetNameField) => {
    const streetName = streetNameField.value;
    if (streetName.trim() === "") {
        errorShower("streetName", "Street Name is Required");
        return false;
    }
    removeError("streetName", "");
    return true;
};
const cityValidation = (cityField) => {
    const city = cityField.value;
    if (city.trim() === "") {
        errorShower("city", "City is Required");
        return false;
    }
    removeError("city", "");
    return true;
};
const stateProvinceValidation = (stateProvinceField) => {
    const stateProvince = stateProvinceField.value;
    if (stateProvince.trim() === "") {
        errorShower("stateProvince", "State / Province is Required");
        return false;
    }
    removeError("stateProvince", "");
    return true;
};
window.addEventListener("load", () => {
    const formResults = document.getElementById("form-results");
    formResults.style.display = "none";
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
    streetNameField.addEventListener("blur", (event) => {
        streetNameValidation(streetNameField);
    });
    cityField.addEventListener("blur", (event) => {
        cityValidation(cityField);
    });
    stateProvinceField.addEventListener("blur", (event) => {
        stateProvinceValidation(stateProvinceField);
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
        const countryField = document.getElementById("country");
        const designationField = document.getElementById("designation");
        const employeeData = {
            email: emailField.value,
            userName: userNameField.value,
            phone: phoneNumberField.value,
            age: ageField.value,
            dob: dobField.value,
            gender: genderField.value,
            flatNo: flatNoField.value,
            streetName: streetNameField.value,
            city: cityField.value,
            stateProvince: stateProvinceField.value,
            country: countryField.value,
            designation: designationField.value,
        };
        emailValidation(emailField);
        userNameValidation(userNameField);
        ageValidation(ageField);
        phoneNumberValidation(phoneNumberField);
        flatNoValidation(flatNoField);
        streetNameValidation(streetNameField);
        cityValidation(cityField);
        stateProvinceValidation(stateProvinceField);
        if (emailValidation(emailField) &&
            userNameValidation(userNameField) &&
            ageValidation(ageField) &&
            phoneNumberValidation(phoneNumberField) &&
            flatNoValidation(flatNoField) &&
            streetNameValidation(streetNameField) &&
            cityValidation(cityField) &&
            stateProvinceValidation(stateProvinceField)) {
            Object.entries(employeeData).forEach(([id, value]) => {
                const field = document.getElementById("form-results-" + id);
                console.log("form-results-" + id);
                field.innerHTML = value;
            });
            var formGroups = document.querySelectorAll(".form-group");
            for (var i = 0; i < formGroups.length; i++) {
                formGroups[i].setAttribute("style", "display : none;");
            }
            const formResults = document.getElementById("form-results");
            formResults.style.display = "flex";
            const formPrimaryHeading = document.getElementById("form-primary-heading");
            formPrimaryHeading.innerText = "Thank You For Submitting";
            const formSubHeading = document.getElementById("form-secondary-heading");
            formSubHeading.innerText = "We will get back to you shortly";
            const formTerHeading = document.getElementById("form-tertiary-heading");
            formTerHeading.innerText = "Mean while we get back look at what we do";
        }
    });
});
//# sourceMappingURL=employeeRegistrationForm.js.map