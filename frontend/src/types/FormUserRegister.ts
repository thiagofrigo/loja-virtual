import { InferType } from 'yup';
import { schemaUserRegister } from '../schemas/userRegisterSchema';

export type FormUserRegister = InferType<typeof schemaUserRegister>;