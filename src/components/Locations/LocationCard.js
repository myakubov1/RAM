/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function LocationCard({ location }) {
  return (
    <Card>
      <CardMedia
        title={location.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {location.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.dimension}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.residents}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">123</Button>
      </CardActions>
    </Card>
  );
}
export default LocationCard;
