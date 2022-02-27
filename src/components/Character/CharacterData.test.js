import React from 'react';
import { render, screen } from '@testing-library/react';

import CharacterData from './CharacterData';

describe("CharacterData component", () => {
    describe(`When CharacterData attributes are:`,()=>{
        it(`Empty, Should be an empty component`, () => {
            render(<CharacterData />);
            const characterData = screen.queryByTestId('character-data')
            expect(characterData).toBeEmptyDOMElement();
        });
        it(`Name, should render and shows name attribute`, () => {
            render(<CharacterData name="Luke Skywalker" />);
            screen.getByText('Luke Skywalker');
        })
        it(`Name, birth_year, should render and shows those attributes`, () => {
            render(<CharacterData name="Luke Skywalker" birth_year={"19BBY"} homeworld={"tatooine"} />);
            screen.getByText('Luke Skywalker');
            screen.getByText('19BBY');
        })
        it(`Name, birth_year, homeworld, should render and shows those attributes`, () => {
            render(<CharacterData name="Luke Skywalker" birth_year={"19BBY"} homeworld={"tatooine"} />);
            screen.getByText('Luke Skywalker');
            screen.getByText('19BBY');
            screen.getByText("tatooine");
        })
    })
});