import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';

import CharacterData from './CharacterData';

let container = null;

describe("CharacterData component", () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it(`Don't render  if there is no name, birthday or homeworld`, () => {
        render(<CharacterData />, container);
        expect(container.textContent).toBe("");

        render(<CharacterData name={"Luke Skywalker"} />, container);
        expect(container.textContent).toBe("Name: Luke Skywalker")

        render(<CharacterData birth_year={"19BBY"} />, container);
        expect(container.textContent).toBe("Birth day: 19BBY");

        render(<CharacterData homeworld={"tatooine"} />, container);
        expect(container.textContent).toBe("Homeworld: tatooine");
    });
});