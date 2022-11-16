import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';


const Pelicula = ({
  pelicula
}) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pelicula.Poster  === NA ? DEFAULT_IMAGE : pelicula.Poster}
            alt={pelicula.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pelicula.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export const ListaPeliculas = ({ peliculas }) => {
    return peliculas.map((pelicula) => {
        return <Pelicula pelicula={pelicula}/>
    })
}
export default Pelicula;
