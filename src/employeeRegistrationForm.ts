const errorShower = (id: string, reason: string) => {
  const errorInputBox = document.getElementById(id) as HTMLInputElement;
  errorInputBox.style.borderBottomColor = "red";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
  const errorTextBox = document.getElementById(id + "-error");
  errorTextBox!.innerText = reason;
};

const removeError = (id: string, reason: string) => {
  const errorInputBox = document.getElementById(id) as HTMLInputElement;
  errorInputBox.style.borderBottomColor = "green";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
  const errorTextBox = document.getElementById(id + "-error");
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
  if (phoneNumber.length === 0) {
    errorShower("phone", "Phone Number is Required");
    return false;
  }

  if (
    /^[\+]?[(]?[6-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      phoneNumber.toString()
    )
  ) {
    errorShower("phone", "Phone Number must be in a valid form");
    return true;
  }
  removeError("phone", "");
  return true;
};
const ageValidation = (ageField: HTMLInputElement): boolean => {
  const age = ageField.value;
  if (age.length < 18) {
    errorShower("age", "Age must be greater than 18");
    return false;
  }
  if (hasNumber(age)) {
    errorShower("age", "Must not contain number");
    return false;
  }
  removeError("age", "");
  return true;
};

const flatNoValidation = (flatNoField: HTMLInputElement) => {
  const flatNo = flatNoField.value;
  if (flatNo.length < 10) {
    errorShower("flatNo", "Flat No must have less than 10 digits");
    return false;
  }
  removeError("flatNo", "");
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

  // dobField.addEventListener("blur", (event): void => {
  //   const dob = dobField.value;
  //   if (dob.length < 18) {
  //     errorShower("dob", "BOB must be greater than 18");
  //     return;
  //   }
  //   if (hasNumber(dob)) {
  //     errorShower("dob", "Must not contain number");
  //     return;
  //   }
  //   removeError("dob", "");
  // });

  flatNoField.addEventListener("blur", (event): void => {
    flatNoValidation(flatNoField);
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

    const designationField = document.getElementById(
      "designation"
    ) as HTMLInputElement;

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

    if (
      emailValidation(emailField) &&
      userNameValidation(userNameField) &&
      ageValidation(ageField) &&
      phoneNumberValidation(phoneNumberField) &&
      flatNoValidation(flatNoField)
    ) {
      alert("Data Sumitted Successfully :  " + JSON.stringify(employeeData));
    }
    // console.log(event);

    // console.log("VALIDATING");
    // console.log(phoneNumber);

    // alert("Data Sumitted Successfully :  " + JSON.stringify(employeeData));
  });
});
