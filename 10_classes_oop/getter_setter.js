class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `${this._password.toUpperCase()}pwnmhjn`;
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return `${this._email.toUpperCase()}`;
  }

  set email(value) {
    this._email = value;
  }
}

const pwn = new User("pwnmhjn@22gmail.com", "abcd");
console.log(pwn.password);
console.log(pwn.email);
