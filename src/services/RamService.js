/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

class RamService {
  _apiBase = 'https://rickandmortyapi.com/api/';

  getResource = async (url) => axios.get(url)
    .then((response) => response.data)
    .catch((error) => error);

  getAllCharacters = async (page = 1) => {
    const res = await this.getResource(`${this._apiBase}character/?page=${page}`);
    return res.results.map(this._transformCharacter);
  };

  getAllLocations = async (page = 1) => {
    const res = await this.getResource(`${this._apiBase}location/?page=${page}`);
    return res.results.map(this._transformLocation);
  };

  getAllEpisodes = async (page = 1) => {
    const res = await this.getResource(`${this._apiBase}episode/?page=${page}`);
    return res.results.map(this._transformEpisode);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}character/${id}`);
    return this._transformCharacter(res);
  };

  getLocation = async (id) => {
    const res = await this.getResource(`${this._apiBase}location/${id}`);
    return this._transformLocation(res);
  };

  getEpisode = async (id) => {
    const res = await this.getResource(`${this._apiBase}episode/${id}`);
    return this._transformEpisode(res);
  };

  _transformCharacter = (char) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    type: char.type,
    gender: char.gender,
    image: char.image,
    episode: char.episode,
  });

  _transformLocation = (location) => ({
    id: location.id,
    name: location.name,
    type: location.type,
    dimension: location.dimension,
    residents: location.residents,
  });

  _transformEpisode = (episode) => ({
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
  });
}

export default RamService;
