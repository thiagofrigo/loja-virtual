export const searchCep = async(cep: string) =>{
    const formattedCep = cep.replace('/\D/g', '');
    const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`);
    const data = await response.json()

    return data
}