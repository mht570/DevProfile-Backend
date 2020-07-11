const validators = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validators.isEmail(data.email)) {
    errors.email = "email is inValid";
  }

  if (validators.isEmpty(data.email)) {
    errors.email = "email filed is required";
  }
  if (validators.isEmpty(data.password)) {
    errors.password = "password filed is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
