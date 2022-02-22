import React from 'react';

const CharacterLayout = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: 'space-around' }}>
            <div>
                <h1>Character number</h1>
                {props.buttons}

            </div>
            {props.children}
        </div>
    );
};

export default CharacterLayout;