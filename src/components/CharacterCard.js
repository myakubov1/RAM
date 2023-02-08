/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CharacterCard({ char }) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={char.image}
        title={char.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {char.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {char.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {char.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {char.gender}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default CharacterCard;
