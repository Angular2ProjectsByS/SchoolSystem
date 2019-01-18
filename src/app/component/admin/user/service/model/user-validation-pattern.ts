export class UserValidationPattern {

    // name : RegExp = /([\p{L}]+)/u;
    name: RegExp = /^[^{null}|\s]*[\p{L}]+[-]*[\p{L}]+$/u;
    nameStartGreat: RegExp = /^[^{null}|\s]+[\p{L}]+([-|\s]+[A-Z]+)*[\p{L}]+$/u;
    zipCode: RegExp = /^[0-9]{2}-[0-9]{3}$/u;
    number: RegExp = /^[0-9]{1,3}[a-zA-Z]{0,2}$/u;
    phoneNumber: RegExp = /^[0-9]+$/u;
    pesel: RegExp = /^[0-9]{11}$/u;
    email: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}
