import React from 'react';

const CharacterData = ({ name, birth_year, homeworld }) => {

    const nameParagraph = name && <p><span>Name: </span>{name}</p>;
    const birth_yearParagraph = birth_year && <p><span>Birth day: </span>{birth_year}</p>
    const homeworldParagraph = homeworld && <p><span>Homeworld: </span>{homeworld}</p>;
    return (
        <div data-testid="character-data">
            {nameParagraph}
            {birth_yearParagraph}
            {homeworldParagraph}
        </div>
    );
};

export default CharacterData;