import React from 'react';
import { Card } from 'antd'

const Character = ({ title, character }) => {
    return (
        <Card title={title} style={{textAlign:"center"}}>
            <p><span>Name:</span>{character.name}</p>
            <p><span>Birth day:</span>{character.birth_year}</p>
            <p><span>Homeworld:</span>{character.homeworld}</p>
        </Card>
    );
};

export default Character;