import React from 'react';

const CharacterData = ({ name, birth_year, homeworld }) => {
    return (
        <>
            <p><span>Name:</span>{name}</p>
            <p><span>Birth day:</span>{birth_year}</p>
            <p><span>Homeworld:</span>{homeworld}</p>
        </>
    );
};

export default CharacterData;