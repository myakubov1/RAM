/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CharacterCard from './CharacterCard';
import RamService from '../../services/RamService';
import PaginationLink from '../Layout/PaginationLink';

function CharactersList() {
  const [chars, setChars] = useState([]);
  const [page, setPage] = useState(1);
  const ramService = new RamService();
  useEffect(() => {
    updateChars(page);
  }, []);

  const updateChars = (page) => {
    ramService
      .getAllCharacters(page)
      .then(onCharsLoaded);
  };

  const onCharsLoaded = (chars) => {
    setChars(chars);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
        {chars.map((char) => (
          <Grid item xs={2} sm={4} md={3} key={char.id}>
            <CharacterCard char={char} />
          </Grid>
        ))}
        <PaginationLink />
      </Grid>
    </Box>
  );
}

export default CharactersList;
