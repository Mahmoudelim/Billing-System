export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;
  electricityUnitsUsed: number;
  telephoneUnitsUsed: number;
  waterUnitsUsed: number;
  electricityDeadline: Date;
  telephoneDeadline: Date;
  waterDeadline: Date;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    creditCardNumber: string,
    expirationDate: string,
    cvv: string,
    electricityUnitsUsed: number,
    telephoneUnitsUsed: number, // Added missing parameter
    waterUnitsUsed: number,
    electricityDeadline: Date,
    telephoneDeadline: Date,
    waterDeadline: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.creditCardNumber = creditCardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    this.electricityUnitsUsed = electricityUnitsUsed;
    this.telephoneUnitsUsed = telephoneUnitsUsed;
    this.waterUnitsUsed = waterUnitsUsed;
    this.electricityDeadline = electricityDeadline;
    this.telephoneDeadline = telephoneDeadline;
    this.waterDeadline = waterDeadline;
  }
}
