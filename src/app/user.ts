export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    creditCardNumber: string,
    expirationDate: string,
    cvv: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.creditCardNumber = creditCardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}

