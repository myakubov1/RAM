/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Routes, Route, Outlet, Link, createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import CharactersList from '../Characters/CharactersList';
import LocationsList from '../Locations/LocationsList';
import AppHeader from './AppHeader';
import EpisodesList from '../Episodes/EpisodesList';
import Character from '../Characters/Character';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </div>
  );
}
export default App;
