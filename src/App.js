import { Menu } from 'antd';
import { getCharacter } from './api/swapi'
import 'antd/dist/antd.css';
import './App.css'
import { useState } from 'react';
import Character from './components/Character';
import CustomLayout from './components/CustomLayout';

const numberPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [character, setCharacter] = useState({});

  const showCharacterHandler = async (number) => {
    const character = await getCharacter(number);
    setCharacter(character);
  }
  const menuItems = numberPeople.map((num) => <Menu.Item key={num}
    onClick={() => showCharacterHandler(num)}>{num}</Menu.Item>);

  return (
    <CustomLayout menuItems={menuItems}>
      <Character title={"Character information"} character={character} />
    </CustomLayout>
  );
}

export default App;
