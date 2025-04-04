import { FormUserRegister } from "../types/FormUserRegister";

export const userRegisterDefaultValues: FormUserRegister = {
    fullName: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
    dateOfBirth: new Date(), // ou string vazia, dependendo de como será o input
    cep: "",
    street: "",
    number: "",
    complement: "", // pode ser string vazia mesmo sendo opcional
    neighborhood: "",
    city: "",
    state: "",
  };
