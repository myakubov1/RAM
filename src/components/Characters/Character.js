/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import RamService from '../../services/RamService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Character() {
  const { id } = useParams();
  const [char, setChar] = useState(id);
  const ramService = new RamService();

  useEffect(() => {
    updateChar(id);
  }, []);

  const updateChar = (id) => {
    ramService
      .getCharacter(id)
      .then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>{char.name}</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{char.status}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Character;
