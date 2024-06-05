import axios from 'axios';
import CharacterDisplay from '../components/CharacterDisplay'

const fetchCharacters = async () => {
  const response = await axios.get('http://localhost:3001/api/chars');
  return response.data;
};

const CharactersPage = async () => {
  const characters = await fetchCharacters();

  return (
    <div>
      <h1>Characters</h1>
      <CharacterDisplay chars={characters}/>
    </div>
  );
};

export default CharactersPage;