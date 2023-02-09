/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LocationCard from './LocationCard';
import RamService from '../../services/RamService';
import PaginationLink from '../Layout/PaginationLink';

function CharactersList() {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState();
  const ramService = new RamService();

  useEffect(() => {
    updateLocations(page);
  }, []);

  const updateLocations = (page) => {
    ramService
      .getAllLocations(page)
      .then(onLocationsLoaded);
  };

  const onLocationsLoaded = (locations) => {
    setLocations(locations);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
        {locations.map((location) => (
          <Grid item xs={2} sm={4} md={3} key={location.id}>
            <LocationCard location={location} />
          </Grid>
        ))}
        <PaginationLink />
      </Grid>
    </Box>
  );
}

export default CharactersList;
