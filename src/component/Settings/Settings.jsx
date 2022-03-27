import { InputLabel, MenuItem, Select, Grid, Card, CardHeader } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

import './styles.css'

const Settings = () => {

    const {theme, setTheme} = useContext(AppContext);

    const handleChange = (e) => {
        setTheme(e.target.value)
        console.log(theme)
    }

  return (
    <div className='container'>
        <form className='form' >
            <Card className='card'>
                <Grid container>
                    <Grid item>
                        
                            <CardHeader title='Settings' />

                            <InputLabel>Theme</InputLabel>
                                <Select
                                    className='select'
                                    fullWidth
                                    id='theme'
                                    size='small'
                                    onChange={handleChange}
                                    value={theme}    
                                >
                                    <MenuItem value='secondary' >Pink</MenuItem>
                                    <MenuItem value='primary' >blue</MenuItem>
                                </Select>
                        
                    </Grid>
                </Grid>
            </Card>
            
        </form>
    </div>
  )
}

export default Settings