import React, { useState } from 'react';
import { Button } from 'antd';

import Character from '../components/Character';
import { getCharacter } from '../api/swapi';
import CharacterLayout from '../Layout/CharacterLayout';

const numberPeople = Array.from({ length: 10 }, (_, i) => i + 1);

const Characters = () => {
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
        <CharacterLayout buttons={buttons}>
            <Character title={"Character information"} character={character} />
        </CharacterLayout>
    );
};

export default Characters;