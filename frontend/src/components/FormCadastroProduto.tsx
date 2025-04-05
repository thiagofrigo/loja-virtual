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

const FormCadastroProduto = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => {setShowPassword((show) => !show)}
    const handleClickShowConfirmPassword = () => {setShowConfirmPassword((show) => !show)}
    
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
                            label="Email"
                            fullWidth
                        />
                    <TextField
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

                <Button>Enviar</Button>
            </Box>                    
        </Box>
    </form>
    );
}

export default FormCadastroProduto;