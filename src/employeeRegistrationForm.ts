const errorShower = (id: string) => {
  const errorInputBox = document.getElementById(id) as HTMLInputElement;
  errorInputBox.style.borderBottomColor = "red";
  setTimeout(() => {
    errorInputBox.style.borderBottomColor = "rgb(55, 55, 55)";
  }, 5000);
};

const validateEmail = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
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

  form!.addEventListener("submit", (event): void => {
    event.preventDefault();
    const email: string = (document.getElementById("email") as HTMLInputElement)
      .value;
    const userName: string = (
      document.getElementById("email") as HTMLInputElement
    ).value;
    const phoneNumber: number = +(
      document.getElementById("phone") as HTMLInputElement
    ).value;
    const age: number = +(document.getElementById("age") as HTMLInputElement)!
      .value;
    const dob = (document.getElementById("dob") as HTMLInputElement).value;
    const gender: string = (
      document.getElementById("gender") as HTMLInputElement
    ).value;
    const flatNo: string = (
      document.getElementById("flatNo") as HTMLInputElement
    ).value;
    const streetName: string = (
      document.getElementById("streetName") as HTMLInputElement
    ).value;
    const city: string = (document.getElementById("city") as HTMLInputElement)
      .value;
    const stateProvince: string = (
      document.getElementById("stateProvince") as HTMLInputElement
    ).value;
    console.log("VALIDATING");
    console.log(phoneNumber);
    let isValid = true;

    if (
      email.includes("@") === false ||
      email.includes(".") === false ||
      !validateEmail(email)
    ) {
      errorShower("email");
      isValid = false;
    }
    if (
      userName.includes(" ") === false ||
      userName.length < 2 ||
      userName.length > 15
    ) {
      errorShower("userName");
      isValid = false;
    }
    if (phoneNumber.toString().includes(" ") === false) {
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

    const employeeData: Employee = {
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
