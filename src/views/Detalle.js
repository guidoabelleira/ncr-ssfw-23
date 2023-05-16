import { Box, Button, Typography } from '@mui/material';
import HeaderApp from '../components/HeaderApp';
import { useNavigate, useLocation } from 'react-router';

const Detalle = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {state} = location;

    const tipo_cuenta = `${state.tipo_letras === "CC" ? "Cuenta Corriente" : "Caja de Ahorro"} en ${state.moneda === "$" ? "Pesos" : "Dolares"}`

    const onClickSalir = () => {
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <HeaderApp />
            <Box>
                <Box sx={{textAlign: "center", marginTop: 2, marginBottom: 4}}>
                    <Typography sx={{color: "#003050", fontSize: 26}}>
                        Consulta de Saldo
                    </Typography>
                    <Typography sx={{color: "#003050", fontSize: 38, fontWeight: 700}}>
                        Este es tu saldo actual
                    </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", marginTop: 2}}>
                    <Box sx={{textAlign: "left"}}>
                        <Typography sx={{color: "#003050", fontSize: 18}}>
                            Saldo de la cuenta: {state.saldo}
                        </Typography>
                        <Typography sx={{color: "#003050", fontSize: 18, marginTop: 2}}>
                            Tipo de cuenta: {tipo_cuenta}
                        </Typography>
                        <Typography sx={{color: "#003050", fontSize: 18, marginTop: 2}}>
                            Numero de la cuenta: {tipo_cuenta}
                        </Typography>
                    </Box>
                    
                </Box>
                <Box position="fixed" sx={{marginLeft: 3, top: 'auto', bottom: 0, marginBottom: 4 }} >
                    <Button 
                        variant='contained' 
                        sx={{
                            height: "50px", 
                            width: "70px",
                            textTransform: 'none', 
                            backgroundColor: "#32cd32",
                            '&:hover, &.Mui-focusVisible': {
                                backgroundColor: "#32cd32", 
                                opacity: 0.5
                            }
                        }}
                        onClick={() => onClickSalir()}
                    >
                        Salir
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Detalle