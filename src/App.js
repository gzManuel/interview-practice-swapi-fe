import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './App.css'
import CustomLayout from './Container/CustomLayout';
import { getCharacter } from './api/swapi';
import CharacterLayout from './Container/CharacterLayout';
import Character from './components/Character/Character';

const numberPeople = Array.from({ length: 10 }, (_, i) => i + 1);

function App() {
  const [character, setCharacter] = useState({});

  const showCharacterHandler = async (number) => {
    const character = await getCharacter(number);
    setCharacter(character);
  }

  const setShowCharacterHandler = (num) => {
    return showCharacterHandler.bind(null, num)
  }

  const buttons = numberPeople.map((num) => <><Button key={num}
    onClick={setShowCharacterHandler(num)}> Character {num}</Button><br /></>);

  return (
    <CustomLayout>
      <CharacterLayout buttons={buttons}>
        <Character title="Character information" character={character} />
      </CharacterLayout>
    </CustomLayout>
  );
}

export default App;
