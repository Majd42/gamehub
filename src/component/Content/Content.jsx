import { Card, CardHeader, Grid, Typography, CardContent, CardMedia, Divider, CardActions, Link, Button } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'


const Content = () => {
    
    const { games, theme } = useContext(AppContext)
    console.log(games)

  return (
    <>
     <Grid container spacing={3} sx={{p:2, mt:3}} >
        {games.map((game) => (
            
            <Grid key={game.id} item xs={12} sm={6} xl ={3} lg={4} >
                <Card style={{height:'100%'}}>
                    <CardHeader
                    title={game.title}
                     />
                     <CardMedia component='img' height='194' src={game.thumbnail} />
                     <CardContent sx={{}}>
                         <Typography varinat='subtitle2' sx={{mb:2}}><b>Description :</b> {game.short_description}</Typography>
                         
                         <Typography variant = 'body2' sx={{mb:1}}><b>Release Data :</b> {game.release_date}</Typography>
                         <Typography variant ='body2'><b>Platform :</b>{game.platform}</Typography>
                     </CardContent>
                     <Divider />
                     
                     <CardActions sx={{mt:1, mb:2, ml:1 }}> 
                         <Button href={game.game_url}  variant='outlined' size='medium' color={theme} >
                            Show Game
                         </Button>
                     </CardActions>
                </Card>
            </Grid>
        ))}
     </Grid>
     

    </>
  )
}

export default Content