import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
import { useNavigate } from 'react-router-dom';


const Pelicula = ({
  pelicula,
  onChange
}) => {
    const onCardClick = () => {
      onChange && onChange(pelicula);
    };

    return (
      <Card sx={{ width: 250, marginBottom: 10 }}>
        <CardActionArea onClick={onCardClick}>
          <CardMedia
            component="img"
            height="140"
            width={250}
            image={pelicula.Poster  === NA ? DEFAULT_IMAGE : pelicula.Poster}
            alt={pelicula.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pelicula.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pelicula.Plot}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {pelicula.Actors}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export const ListaPeliculas = ({ peliculas }) => {
    const navigate = useNavigate();
    const onPeliculaClick = ({ imdbID }) => {
      navigate(`/peliculas/${imdbID}`);
    }
    return (
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20px',
      }}>
        {
          peliculas.map((pelicula) => {
            return <Pelicula pelicula={pelicula} onChange={onPeliculaClick}/>
        })
        }
      </section>
    )
}

export default Pelicula;
