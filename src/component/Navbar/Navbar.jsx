import { AppBar, IconButton, MenuItem, Toolbar, Typography, Menu, Paper, Divider, FormControl, InputLabel, Select, Box, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useContext, useState } from 'react'
import { Settings } from '@mui/icons-material';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    
    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)
    const {sortby, setSortby, theme} = useContext(AppContext)
    const location = useLocation();
    


    const handleClick =(e) => {
        console.log(e.currentTarget)
        setAnchor(e.currentTarget)
    }
    
    const handleClose = ( ) => {
        setAnchor(null) 
    }

    const handleChange= (e) => {
        setSortby(e.target.value)
    }
   
  return (
      
    <>
    <AppBar  color={theme}>
        <Toolbar>
            
            <Typography component={Link} to='/' variant='h5' sx={{flexGrow: 1, textDecoration: 'none' ,color:'#fff'}}>GAMEHUB</Typography>
            {location.pathname ==='/' &&
            <Box sx={{ minWidth: 120 }}>
                
                <FormControl fullWidth>
                    
                    <Select
                    size='small'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortby}
                    sx={{backgroundColor :'#fff', mr:2}}
                    onChange={handleChange}
                    >
                    <MenuItem value={'pc'}>PC</MenuItem>
                    <MenuItem value={'browser'}>Web Browser</MenuItem>
                    <MenuItem value={'all'}>ALL</MenuItem>
                    </Select>
                </FormControl>
            </Box>}
            <IconButton onClick={handleClick} color='inherit' sx= {{mr:1}} size='large'>
                <AccountCircleIcon />
            </IconButton>
            <Paper sx={{}}>
                <Menu 
                    anchorEl={anchor}
                    open={open}
                    onClose={handleClose}
                    

                    >
                    <MenuItem component={Link} to='/' onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    <MenuItem onClick={handleClose}>Sign up</MenuItem>
                    <Divider />
                    
                    <MenuItem component={Link} to='/settings' onClick={handleClose}>Settings <Settings/></MenuItem>
                    
                </Menu>

            </Paper>
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default Navbar