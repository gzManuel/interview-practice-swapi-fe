import React from 'react';
import { Card } from 'antd';

const CharacterCard = ({ children, title }) => {
    return (
        <Card title={title} style={{ textAlign: "center" }}>
            {children}
        </Card>)
};

export default CharacterCard;