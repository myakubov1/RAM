/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

class RamService {
  _apiBase = 'https://rickandmortyapi.com/api/';

  getResource = async (url) => axios.get(url)
    .then((response) => response.data)
    .catch((error) => error);

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}character`);
    return res.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}character/${id}`);
    return this._transformCharacter(res.results[0]);
  };

  _transformCharacter = (char) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    type: char.type,
    gender: char.gender,
    image: char.image,
  });
}

export default RamService;
