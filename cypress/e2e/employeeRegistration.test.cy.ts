describe("Registration Form Testing", () => {
  it("open registration form", () => {
    cy.visit("https://gowthamtg.github.io/DevRevEmployeeRegistration/");
  });
});

describe("Email Field Validation", () => {
  it("Checking if Email Field Exists", () => {
    cy.get("#email").should("exist");
  });

  it("Testing Email Field for Required", () => {
    cy.get("#email").focus();
    cy.get("#email").blur();
    cy.get("#email-error").should("have.text", "Email is Required");
  });

  it("Testing Email Field for Length", () => {
    cy.get("#email").type("S");
    cy.get("#email").blur();
    cy.get("#email-error").should("have.text", "Email must be in a valid form");
  });

  it("Testing Email Field without (.com, .org, .ai)", () => {
    cy.get("#email").clear();
    cy.get("#email").type("gowtham@gmail");
    cy.get("#email").blur();
    cy.get("#email-error").should("have.text", "Email must be in a valid form");
  });

  it("Testing Email Field with correct input", () => {
    cy.get("#email").clear();
    cy.get("#email").type("gowtham@gmail.com");
    cy.get("#email").blur();
    cy.get("#email-error").should("have.text", "");
  });
});

describe("User Name Field Validation", () => {
  it("Checking if User Name Field Exists", () => {
    cy.get("#userName").should("exist");
  });

  it("Testing User Name Field for Length", () => {
    cy.get("#userName").focus();
    cy.get("#userName").blur();
    cy.get("#userName-error").should("have.text", "User Name is Required");
  });

  it("Testing User Name Field to check if it contains Numbers", () => {
    cy.get("#userName").type("2");
    cy.get("#userName").blur();
    cy.get("#userName-error").should("have.text", "Must not contain number");
  });

  it("Testing For Correct Input", () => {
    cy.get("#userName").clear();
    cy.get("#userName").type("Gowtham");
    cy.get("#userName").blur();
    cy.get("#userName-error").should("have.text", "");
  });
});

describe("Phone Number Field Validation", () => {
  it("Checking if Phone Number Field Exists", () => {
    cy.get("#phone").should("exist");
  });

  it("Testing Phone Number Field for Length", () => {
    cy.get("#phone").focus();
    cy.get("#phone").blur();
    cy.get("#phone-error").should("have.text", "Phone Number is Required");
  });

  it("Testing Phone Number Field to check if it is in Valid Form", () => {
    cy.get("#phone").type("2");
    cy.get("#phone").blur();
    cy.get("#phone-error").should(
      "have.text",
      "Phone Number must be in a valid form"
    );
  });

  it("Testing For Correct Input", () => {
    cy.get("#phone").clear();
    cy.get("#phone").type("999-999-9999");
    cy.get("#phone").blur();
    cy.get("#phone-error").should("have.text", "");
  });
});

describe("Age Field Validation", () => {
  it("Checking if Age Field Exists", () => {
    cy.get("#age").should("exist");
  });

  it("Testing Age Field for Length", () => {
    cy.get("#age").focus();
    cy.get("#age").blur();
    cy.get("#age-error").should("have.text", "Age is Required");
  });

  it("Testing age Field to check if it is in Valid Form", () => {
    cy.get("#age").type("2");
    cy.get("#age").blur();
    cy.get("#age-error").should("have.text", "Age must be greater than 18");
  });

  it("Testing For Correct Input", () => {
    cy.get("#age").clear();
    cy.get("#age").type("22");
    cy.get("#age").blur();
    cy.get("#age-error").should("have.text", "");
  });
});

describe("Flat No Field Validation", () => {
  it("Checking if Flat No Field Exists", () => {
    cy.get("#flatNo").should("exist");
  });

  it("Testing Flat No Field for Length", () => {
    cy.get("#flatNo").focus();
    cy.get("#flatNo").blur();
    cy.get("#flatNo-error").should("have.text", "Flat No is Required");
  });

  it("Testing flatNo Field to check if it is in Valid Form", () => {
    cy.get("#flatNo").type("2222222222222200000002");
    cy.get("#flatNo").blur();
    cy.get("#flatNo-error").should(
      "have.text",
      "Flat No must have less than 10 digits"
    );
  });

  it("Testing For Correct Input", () => {
    cy.get("#flatNo").clear();
    cy.get("#flatNo").type("22");
    cy.get("#flatNo").blur();
    cy.get("#flatNo-error").should("have.text", "");
  });
});

describe("Testing Form Submission", () => {
  it("Submit Button Clicked", () => {
    cy.get("#submit").click();
  });
});
