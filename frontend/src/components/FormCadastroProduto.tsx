import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField,
   Box,
   Button,
   IconButton
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from "@mui/icons-material/Search";
import { searchCep } from '../services/viacep';
import { FormUserRegister } from '../types/FormUserRegister';
import { schemaUserRegister } from '../schemas/userRegisterSchema';
import { userRegisterDefaultValues } from '../constants/userRegisterDefaults';
 

const FormCadastroUser = () => {
    const {
        register,
        setValue,
        formState: { errors },
    } = useForm<FormUserRegister>({
        resolver: yupResolver(schemaUserRegister),
        defaultValues: userRegisterDefaultValues,
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const [cep, setCep] = React.useState('')

    const handleClickShowPassword = () => {setShowPassword((show) => !show)}
    const handleClickShowConfirmPassword = () => {setShowConfirmPassword((show) => !show)}

    const handleSearchCep = async() =>{
        console.log(cep)
        const response = await searchCep(cep)
    }
    
    return (
    <form>
        <Box
            sx={{
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:"column",
                padding:2,
            }}
            
        >
            <Box
                sx={{
                    width:'100%',   
                    maxWidth: 500,
                    padding:4,
                    borderRadius:2,
                    boxShadow:3 ,
                    display:'flex',
                    flexDirection: "column",
                    gap:2

                }}
            >
                <Box>
                    <TextField
                        {...register('fullName')}
                            label="Nome completo"
                            fullWidth
                        />
                </Box>
                    
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:2,
                        width:'100%',
                    }}
                >
                    <TextField
                        {...register('email')}
                            label="Email"
                            fullWidth
                        />
                    <TextField
                        {...register('emailConfirmation')}
                        label="Confirme email"
                        fullWidth
                    />
                
                </Box>  

                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:2,
                        width:'100%',
                    }}
                >
                    <TextField
                        {...register('password')}
                        label="Senha"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        slotProps={{
                            input: {
                                endAdornment:
                                (<IconButton
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>)
                            }
                        }}
                    />

                    <TextField
                        {...register('passwordConfirmation')}
                        label="Confirme a senha"
                        type={showConfirmPassword ? 'text' : 'password'}
                        fullWidth
                        slotProps={{
                            input: {
                                endAdornment:
                                (<IconButton
                                    onClick={handleClickShowConfirmPassword}
                                >
                                    {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>)
                            }
                        }}
                    />
                </Box> 

                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:2,
                        width:'100%',
                    }}
                >
                    <TextField
                    {...register('cep')}
                        id='cep'
                        label="CEP"
                        value={cep}
                        onChange={(e)=> setCep(e.target.value)}
                        sx={{
                            width: "50%",
                        }}
                        slotProps={{
                            input:{
                                endAdornment:(
                                    <IconButton onClick={handleSearchCep}>
                                        <SearchIcon/>
                                    </IconButton>
                                )
                            }
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:2,
                        width:'100%',
                    }}
                >
                    <TextField
                    {...register('street')}
                        id='street'
                        label="Logradouro"
                        fullWidth
                    />
                    <TextField
                        id='number'
                        label="Número"
                        fullWidth
                    />
                </Box>

                <Box>
                    <TextField
                    {...register('complement')}
                        id='complement'
                        label="Complemento"
                        fullWidth
                    />
                    

                </Box>

                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        gap:2,
                        width:'100%',
                    }}
                >
                    <TextField
                    {...register('neighborhood')}
                        id='neighborhood'
                        label="Bairro"
                        fullWidth
                    />

                    <TextField
                    {...register('city')}
                        id='city'
                        label="Cidade"
                        fullWidth
                    />
                    <TextField
                    {...register('state')}
                        id='state'
                        label="Estado"
                        fullWidth
                    />
                </Box>  

                <Button>Enviar</Button>
            </Box>                    
        </Box>
    </form>
    );
}

export default FormCadastroUser;