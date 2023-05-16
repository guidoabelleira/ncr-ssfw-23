import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import HeaderApp from '../components/HeaderApp';
import { ItemCard } from '../components/ItemCard';
import {getData} from '../api/index';
import { useNavigate } from 'react-router';

const Home = () => {

    const [data, setData] = useState();
    const [elements, setElements] = useState();
    const [page, setPage] = useState(0);
    const [indexStart, setIndexStart] = useState(0);
    const [indexEnd, setIndexEnd] = useState(5);

    const navigate = useNavigate();

    const callApi = async () => {
        let response = await getData();
        setData(response);
        if(response.status === true) {
            setElements(response.cuentas.slice(0, 5))
        }
        return
    }

    const onClick = (tipo, accion, contenido) => {
        if(tipo === "CARD") {
            return navigate("/detalle", {state: contenido})
        } else {
            if(accion === "NEXT") {
                if(data.cuentas.length < indexEnd) {
                    return
                }
                setPage(page + 1);
                setElements(data.cuentas.slice(indexEnd, indexEnd + 4));
                setIndexStart(indexEnd);
                setIndexEnd(indexEnd + 4)
                return
            }
            if(accion === "BACK") {
                if(page === 1) {
                    setPage(0); 
                    setElements(data.cuentas.slice(0, 5))
                    setIndexStart(0)
                    setIndexEnd(5)
                } else {
                    setPage(page - 1);
                    setElements(data.cuentas.slice(indexStart-4, indexStart))
                    setIndexStart(indexStart - 4);
                    setIndexEnd(indexStart)
                }
                // 
            }
        }
    }

    const onClickSalir = () => {
        navigate("/");
    }

    useEffect(() => {
        callApi(); 
    }, []);

    

    return (
        <Box sx={{ flexGrow: 1}}>
            <HeaderApp />
            <Box>
                {
                    data?.status === false ? (
                        <Box sx={{textAlign: "center", marginTop: 2, marginBottom: 4}}>
                            <Typography sx={{color: "#003050", fontSize: 36, fontWeight: 700}}>
                                {data.mensaje}
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <Box sx={{textAlign: "center", marginTop: 2, marginBottom: 4}}>
                                <Typography sx={{color: "#003050", fontSize: 26}}>
                                    Consulta de Saldo
                                </Typography>
                                <Typography sx={{color: "#003050", fontSize: 38, fontWeight: 700}}>
                                    Selecciona la Cuenta a Consultar
                                </Typography>
                            </Box>
                            <Box id="aca" sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                <Stack 
                                    direction="row" 
                                    flexWrap="wrap"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{width: "100%"}}
                                >
                                        {
                                            page !== 0 && (
                                                <ItemCard key={"btn-back"} tipo="BOTON" accion="BACK" titulo="<< Opciones anteriores" detalle="" onClickCard={onClick}/>
                                            )
                                        }
                                        {
                                            elements?.map((e, i) => {
                                                return (                                            
                                                    <ItemCard 
                                                        key={i}
                                                        tipo="CARD" 
                                                        onClickCard={onClick}
                                                        titulo={e.tipo_letras === "CC" ? "Cuenta Corriente" : "Caja de Ahorro"} 
                                                        detalle={`Nro: ${e.n}`} 
                                                        contenido={e}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            data?.cuentas.length > indexEnd && (
                                                <ItemCard key={"btn-next"} tipo="BOTON" accion="NEXT" titulo="Más opciones >>" detalle="" onClickCard={onClick}/>
                                            )
                                        }
                                </Stack>
                            </Box>
                        </>
                    )
                }
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

export default Home