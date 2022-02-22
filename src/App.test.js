import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import CharacterData from './components/Character/CharacterData';

describe('App component', () => {
    test('Render 10 buttons', () => {
        render(<App />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(10);
    });

    // test(`First render CharacterData empty`, async () => {
    //     const { container } = render(<App />);
    //     const buttons = screen.getAllByRole('button');

    // })

    test('Click button 1 and render Character component', async () => {
        render(<App />);
        const buttons = screen.getAllByRole('button');

        userEvent.click(buttons[0]);

        await screen.findByText("Name:");
        await screen.findByText("Birth day:")
        await screen.findByText("Homeworld:")
    })
});