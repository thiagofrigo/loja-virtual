 export interface FormUserRegister {
    fullName: string;
    email: string;
    emailConfirmation: string;
    password: string;
    passwordConfirmation: string;
    dateOfBirth: Date;
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood?: string;
    city: string;
    state: string;

}