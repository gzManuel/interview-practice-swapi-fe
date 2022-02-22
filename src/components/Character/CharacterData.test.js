import React from 'react';
import { render, screen } from '@testing-library/react';

import CharacterData from './CharacterData';

describe("CharacterData component", () => {
    it(`Empty CharacterData if there're not name, birthday or homeworld`, () => {
        const { container } = render(<CharacterData />);
        expect(container).toBeEmptyDOMElement();
    });
    it(`Render name, birth_year and homeworld`, () => {
        render(<CharacterData name="Luke Skywalker" birth_year={"19BBY"} homeworld={"tatooine"} />);
        screen.getByText('Luke Skywalker');
        screen.getByText('19BBY');
        screen.getByText("tatooine");
    })
});