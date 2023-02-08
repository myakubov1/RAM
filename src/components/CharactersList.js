/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CharacterCard from './CharacterCard';
import RamService from '../services/RamService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CharactersList() {
  const [chars, setChars] = useState([]);
  const ramService = new RamService();

  useEffect(() => {
    updateChars();
  }, []);

  const updateChars = () => {
    ramService
      .getAllCharacters()
      .then(onCharsLoaded);
  };

  const onCharsLoaded = (chars) => {
    setChars(chars);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
        {chars.map((char, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <CharacterCard char={char} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CharactersList;
