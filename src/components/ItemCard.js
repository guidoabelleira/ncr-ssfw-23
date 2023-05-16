import {Paper, Box, Typography, ButtonBase} from '@mui/material';

export const ItemCard = (props) => {

    const {tipo, onClickCard, titulo, detalle, accion, contenido} = props;

    return (
        <ButtonBase onClick={() => onClickCard(tipo, accion, contenido)} sx={{margin: 2}}>
            <Paper 
                sx={{
                    backgroundColor: "#32cd32", 
                    width: "300px", 
                    height: "124px", 
                    display: "flex", 
                    justifyContent: "center", 
                    flexDirection: "column"
                }}
            >
                {
                    titulo && (  
                        <Box>
                            <Typography sx={{color: "#f0efef", fontSize: "18px", fontWeight: 500}}>
                                {titulo}
                            </Typography>
                        </Box>
                    )
                }
                {
                    detalle && (  
                        <Box>
                            <Typography sx={{color: "#f0efef", fontSize: "18px", fontWeight: 500}}>
                                {detalle}
                            </Typography>
                        </Box>
                    )
                }
            </Paper>
        </ButtonBase>
    )
}
