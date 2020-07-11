const validators = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validators.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be b/w 2 and 30 char";
  }

  if (validators.isEmpty(data.name)) {
    errors.name = "Name filed is required";
  }
  if (validators.isEmpty(data.email)) {
    errors.email = "email filed is required";
  }
  if (validators.isEmail(data.email)) {
    errors.email = "email is inValid";
  }
  if (validators.isEmpty(data.password)) {
    errors.password = "password filed is required";
  }
  if (validators.isEmpty(data.password2)) {
    errors.password2 = "Confirm password filed is required";
  }

  if (!validators.isLength(data.password, { min: 6, max: 30 })) {
    errors.name = "Password must be atleast 6 char";
  }

  if (validators.equals(data.password2, data.password)) {
    errors.password2 = "password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
