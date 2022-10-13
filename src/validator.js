import { defineRule } from "vee-validate";
import { email, require, min, max } from "@vee-validate/rules";

defineRule("email", (value) => {
  if (email(value) && require(value)) {
    return true;
  }

  return "Veuillez entrer une adresse email valide";
});

defineRule("username", (value) => {
  if (require(value)) {
    return true;
  }

  return "Veuillez entrer un Pseudo valide";
});

defineRule("password", (value) => {
  if (
    require(value) &&
    min(value, { length: 6 }) &&
    max(value, { length: 10 })
  ) {
    return true;
  }

  return "Le mot de passe doit contenir entre 6 et 10 caractères ";
});

defineRule("confirmPassword", (value, [target], ctx) => {
  if (require(value) && value === ctx.form[target]) {
    return true;
  }

  return "Les mots de passe doivent être identiques ";
});
