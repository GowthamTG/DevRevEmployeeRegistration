// const formResults = document.getElementById("form-results") as HTMLInputElement;

// formResults.style.display = "none";

const errorShower = (id: string, reason: string) => {
  console.log(id);

  const errorInputBox = document.getElementById(id) as HTMLInputElement;
  errorInputBox.style.borderBottomColor = "red";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
  const errorTextBox = document.getElementById(id + "-error");
  console.log(errorTextBox);
  errorTextBox!.innerText = reason;
};

const removeError = (id: string, reason: string) => {
  console.log(id);

  const errorInputBox = document.getElementById(id) as HTMLInputElement;
  errorInputBox.style.borderBottomColor = "green";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
  const errorTextBox = document.getElementById(id + "-error");
  console.log(errorTextBox);

  errorTextBox!.innerText = "";
};

const validateEmail = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
const hasNumber = (myString: string) => {
  return /\d/.test(myString);
};

const emailValidation = (emailField: HTMLInputElement) => {
  const email = emailField.value;
  if (email.length === 0) {
    errorShower("email", "Email is Required");
    return false;
  }
  if (
    email.includes("@") === false ||
    email.includes(".") === false ||
    !validateEmail(email)
  ) {
    errorShower("email", "Email must be in a valid form");
    return false;
  }
  removeError("email", "");
  return true;
};

const userNameValidation = (userNameField: HTMLInputElement): boolean => {
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

const phoneNumberValidation = (phoneNumberField: HTMLInputElement) => {
  const phoneNumber = phoneNumberField.value;
  // var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  console.log(phoneNumber);

  if (phoneNumber.length === 0) {
    errorShower("phone", "Phone Number is Required");
    return false;
  }

  if (
    /^[\+]?[(]?[6-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      phoneNumber
    ) === false
  ) {
    errorShower("phone", "Phone Number must be in a valid form");
    return false;
  }
  removeError("phone", "");
  return true;
};
const ageValidation = (ageField: HTMLInputElement): boolean => {
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

const flatNoValidation = (flatNoField: HTMLInputElement) => {
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

const streetNameValidation = (streetNameField: HTMLInputElement) => {
  const streetName = streetNameField.value;
  if (streetName.trim() === "") {
    errorShower("streetName", "Street Name is Required");
    return false;
  }

  removeError("streetName", "");
  return true;
};
const cityValidation = (cityField: HTMLInputElement) => {
  const city = cityField.value;
  if (city.trim() === "") {
    errorShower("city", "City is Required");
    return false;
  }

  removeError("city", "");
  return true;
};
const stateProvinceValidation = (stateProvinceField: HTMLInputElement) => {
  const stateProvince = stateProvinceField.value;
  if (stateProvince.trim() === "") {
    errorShower("stateProvince", "State / Province is Required");
    return false;
  }

  removeError("stateProvince", "");
  return true;
};

type Employee = {
  email: string;
  userName: string;
  phoneNumber: number;
  age: number;
  dob: string;
  gender: string;
  flatNo: string;
  streetName: string;
  city: string;
  stateProvince: string;
};

window.addEventListener("load", (): void => {
  const formResults = document.getElementById(
    "form-results"
  ) as HTMLInputElement;

  formResults.style.display = "none";
  const form = document.getElementById("form");
  const emailField = document.getElementById("email") as HTMLInputElement;
  const userNameField = document.getElementById("userName") as HTMLInputElement;
  const phoneNumberField = document.getElementById("phone") as HTMLInputElement;
  const ageField = (document.getElementById("age") as HTMLInputElement)!;
  const dobField = document.getElementById("dob") as HTMLInputElement;
  const genderField = document.getElementById("gender") as HTMLInputElement;
  const flatNoField = document.getElementById("flatNo") as HTMLInputElement;
  const streetNameField = document.getElementById(
    "streetName"
  ) as HTMLInputElement;

  const cityField = document.getElementById("city") as HTMLInputElement;
  const stateProvinceField = document.getElementById(
    "stateProvince"
  ) as HTMLInputElement;
  emailField.addEventListener("blur", (event): void => {
    emailValidation(emailField);
  });

  userNameField.addEventListener("blur", (event): void => {
    userNameValidation(userNameField);
  });

  phoneNumberField.addEventListener("blur", (event): void => {
    phoneNumberValidation(phoneNumberField);
  });

  ageField.addEventListener("blur", (event): void => {
    ageValidation(ageField);
  });

  flatNoField.addEventListener("blur", (event): void => {
    flatNoValidation(flatNoField);
  });

  streetNameField.addEventListener("blur", (event): void => {
    streetNameValidation(streetNameField);
  });
  cityField.addEventListener("blur", (event): void => {
    cityValidation(cityField);
  });
  stateProvinceField.addEventListener("blur", (event): void => {
    stateProvinceValidation(stateProvinceField);
  });

  form!.addEventListener("submit", (event): void => {
    event.preventDefault();
    const form = document.getElementById("form");
    const emailField = document.getElementById("email") as HTMLInputElement;
    const userNameField = document.getElementById(
      "userName"
    ) as HTMLInputElement;
    const phoneNumberField = document.getElementById(
      "phone"
    ) as HTMLInputElement;
    const ageField = (document.getElementById("age") as HTMLInputElement)!;
    const dobField = document.getElementById("dob") as HTMLInputElement;
    const genderField = document.getElementById("gender") as HTMLInputElement;
    const flatNoField = document.getElementById("flatNo") as HTMLInputElement;
    const streetNameField = document.getElementById(
      "streetName"
    ) as HTMLInputElement;
    const cityField = document.getElementById("city") as HTMLInputElement;
    const stateProvinceField = document.getElementById(
      "stateProvince"
    ) as HTMLInputElement;
    const countryField = document.getElementById("country") as HTMLInputElement;

    const designationField = document.getElementById(
      "designation"
    ) as HTMLInputElement;

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
    if (
      emailValidation(emailField) &&
      userNameValidation(userNameField) &&
      ageValidation(ageField) &&
      phoneNumberValidation(phoneNumberField) &&
      flatNoValidation(flatNoField) &&
      streetNameValidation(streetNameField) &&
      cityValidation(cityField) &&
      stateProvinceValidation(stateProvinceField)
    ) {
      Object.entries(employeeData).forEach(([id, value]) => {
        const field = document.getElementById("form-results-" + id);
        console.log("form-results-" + id);

        field!.innerHTML = value;
      });
      var formGroups = document.querySelectorAll(".form-group");
      for (var i = 0; i < formGroups.length; i++) {
        formGroups[i].setAttribute("style", "display : none;");
      }
      const formResults = document.getElementById(
        "form-results"
      ) as HTMLInputElement;
      formResults.style.display = "flex";
      const formSubHeading = document.getElementById("form-secondary-heading");
      formSubHeading!.innerText = "Thank You For Submitting";
      const formTerHeading = document.getElementById("form-tertiary-heading");
      formTerHeading!.innerText = "Mean while we get back look at what we do";
    }
  });
});
