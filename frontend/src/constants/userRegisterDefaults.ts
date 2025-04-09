import { FormUserRegister } from "../types/FormUserRegister";

export const userRegisterDefaultValues: FormUserRegister = {
    fullName: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
    dateOfBirth: new Date(), 
    cep: "",
    street: "",
    number: "",
    complement: "", 
    neighborhood: "",
    city: "",
    state: "",
  };
