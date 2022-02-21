import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterData from './CharacterData';

const Character = ({ title, character }) => {
    return (
        <CharacterCard title={title}>
            <CharacterData name={character.name} birth_year={character.birth_year} homeworld={character.homeworld} />
        </CharacterCard>
    );
};

export default Character;