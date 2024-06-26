import './index.css';
import { getCode, getName } from 'country-list';
import { postcodeValidator } from 'postcode-validator';
import highFive from './eevee-pikachu.gif';

document.querySelector('form').style.zIndex = '2';

document.querySelector('.highFiveImg').src = highFive;

document.querySelector('#highFiveModal').addEventListener('click', () => {
  document
    .querySelector('#highFiveModalBackdrop')
    .classList.remove('triggerShowModalBackdrop');
  document
    .querySelector('#highFiveModalBackdrop')
    .classList.add('triggerHideModalBackdrop');
  document.querySelector('#highFiveModal').classList.remove('triggerShowModal');
  document.querySelector('#highFiveModal').classList.add('triggerHideModal');
  document.querySelector('form').style.zIndex = '2';
});

let data = {
  email: '',
  country: '',
  countryCode: '',
  zip: '',
  password: '',
  confirmPassword: '',
};

// https://stackoverflow.com/a/9204568
const checkEmail = (email = '') => {
  const re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    document.body.querySelector('.email').setCustomValidity('');
    data.email = email;
  } else {
    document.body
      .querySelector('.email')
      .setCustomValidity('Incorrect email format');
  }
};

// https://www.npmjs.com/package/country-list
const checkCountry = (country = '') => {
  const code = getCode(country);
  const name = getName(country);
  if (code || name) {
    document.body.querySelector('.country').setCustomValidity('');
    if (code) {
      data.countryCode = code;
      data.country = country;
    } else if (name) {
      data.countryCode = country;
      data.country = name;
    }
  } else {
    document.body
      .querySelector('.country')
      .setCustomValidity('Incorrect country name');
  }
};

// https://www.npmjs.com/package/postcode-validator
const checkZip = (zip = '') => {
  let validate = false;
  let errorMsg = 'Incorrect zip code';
  try {
    validate = postcodeValidator(zip, data.countryCode);
  } catch (exception) {
    errorMsg = exception.toString();
  }
  console.log(zip);
  if (validate) {
    document.body.querySelector('.zipCode').setCustomValidity('');
    data.zip = zip;
  } else {
    document.body.querySelector('.zipCode').setCustomValidity(errorMsg);
  }
};

const checkPasswords = (pass1, pass2) => {
  if (pass1 === pass2 && pass1 !== '') {
    document.body.querySelector('.password').setCustomValidity('');
    document.body.querySelector('.confirmPassword').setCustomValidity('');
    data.password = pass1;
    data.confirmPassword = pass2;
  } else {
    document.body
      .querySelector('.password')
      .setCustomValidity("Passwords don't match");
    document.body
      .querySelector('.confirmPassword')
      .setCustomValidity("Passwords don't match");
  }
};

const addModal = () => {};

const addListeners = () => {
  document.body.querySelector('.email').addEventListener('input', (e) => {
    checkEmail(e.target.value);
    e.target.reportValidity();
  });
  document.body.querySelector('.country').addEventListener('input', (e) => {
    checkCountry(e.target.value);
    e.target.reportValidity();
  });
  document.body.querySelector('.zipCode').addEventListener('input', (e) => {
    checkZip(e.target.value, document.body.querySelector('.country').value);
    e.target.reportValidity();
  });
  document.body.querySelector('.password').addEventListener('input', (e) => {
    checkPasswords(
      e.target.value || '',
      document.body.querySelector('.confirmPassword').value || ''
    );
    e.target.reportValidity();
  });
  document.body
    .querySelector('.confirmPassword')
    .addEventListener('input', (e) => {
      checkPasswords(
        document.body.querySelector('.password').value || '',
        e.target.value || ''
      );
      e.target.reportValidity();
    });
  document.body.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    let passingScore = 0;
    const inputList = document.querySelectorAll('input');
    for (let i = inputList.length - 1; i >= 0; i--) {
      if (inputList[i].reportValidity()) passingScore++;
    }
    if (passingScore === 5) {
      document
        .querySelector('#highFiveModal')
        .classList.remove('triggerHideModal');
      document
        .querySelector('#highFiveModal')
        .classList.add('triggerShowModal');
      document
        .querySelector('#highFiveModalBackdrop')
        .classList.remove('triggerHideModalBackdrop');
      document
        .querySelector('#highFiveModalBackdrop')
        .classList.add('triggerShowModalBackdrop');

      document.querySelector('form').style.zIndex = '-1';
    }
    console.log(passingScore);
    console.log(data);
  });
};

addListeners();
