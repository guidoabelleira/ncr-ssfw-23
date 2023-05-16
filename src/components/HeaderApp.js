import { AppBar, Toolbar} from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo'

const HeaderApp = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: "#32cd32"}}>
            <Toolbar variant="dense" >
                <Logo sx={{ fontSize: "7rem" }}/>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderApp