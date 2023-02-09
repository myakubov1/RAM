/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EpisodeCard from './EpisodeCard';
import RamService from '../../services/RamService';

function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);
  const ramService = new RamService();

  useEffect(() => {
    updateEpisodes();
  }, []);

  const updateEpisodes = () => {
    ramService
      .getAllEpisodes()
      .then(onEpisodesLoaded);
  };

  const onEpisodesLoaded = (episodes) => {
    setEpisodes(episodes);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
        {episodes.map((episode) => (
          <Grid item xs={2} sm={4} md={3} key={episode.id}>
            <EpisodeCard episode={episode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default EpisodesList;
