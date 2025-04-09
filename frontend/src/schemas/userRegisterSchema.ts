import * as yup from 'yup';

export const schemaUserRegister = yup.object().shape({
    fullName : yup
        .string()
        .required('Nome é obrigatorio'),

    email: yup
        .string()
        .email('Email invalido')
        .required('Por favor informa um email'),

    emailConfirmation: yup
        .string()
        .oneOf([yup.ref('email')], 'Os emails não coincidem')
        .required('Confirme o email'),
    
    password: yup
        .string()
        .min(8, "A senha precisa conter no mínimo 6 caracteres")
        .required("Por favor informe uma senha")
        .matches(/[A-Z]/, "Precisa conter uma letra maiúscula")
        .matches(/[a-z]/, "Precisa conter uma letra minúscula")
        .matches(/\d/, "Precisa conter um número")
        .matches(/[^a-zA-Z0-9]/, "Precisa conter um caractere especial"),

    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas não coincidem")
        .required("Confirme a senha"),
    
    dateOfBirth: yup
        .date()
        .required("Informe a data de nascimento")
        .test(
            'maior-de-idade',
            'Você deve ter pelo menos 18 anos',
            function (value) {
                if (!value) return false;
                const today = new Date()
                const age = today.getFullYear() - value.getFullYear();
                const month =  today.getMonth() - value.getMonth();
                const day =  today.getDay() - value.getDay()

                if (age > 18 || 
                    (age == 18 &&(month > 0 || (month === 0 && day >= 0)))
                ){ 
                    return true;
                 }
                return false;

            }
        ),

    cep: yup
        .string()
        .required("Informe o cep"),

    street: yup
        .string()
        .required("Informe o logradouro"),
    
    number: yup
        .string()
        .test(
            'is-number', "Número inválido", value => !isNaN(Number(value))
        )
        .required("Informe o número"),
    
    complement: yup
        .string()
        .required()
        .default(""),
    
    neighborhood: yup
        .string()
        .required(),
    
    city: yup
        .string()
        .required(),
    
    state: yup
        .string()
        .required()
    

    
})