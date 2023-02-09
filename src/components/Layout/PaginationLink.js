/* eslint-disable no-unused-vars */
import * as React from 'react';
import {
  Link, MemoryRouter, Route, Routes, useLocation,
} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function PaginationLink() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <Pagination
      page={page}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/characters${`?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}
export default PaginationLink;
