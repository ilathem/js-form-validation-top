import "./index.css";
import { getCode } from "country-list";
import { postcodeValidator } from "postcode-validator";

// https://stackoverflow.com/a/9204568
const checkEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
 
// https://www.npmjs.com/package/country-list
const checkCountry = country => {
  return getCode(country);
}

// https://www.npmjs.com/package/postcode-validator
const checkZip = (zip, countryCode) => {
  return postcodeValidator(zip, countryCode);
}

const checkPasswords = (pass1, pass2) => {
  return pass1 === pass2;
}

