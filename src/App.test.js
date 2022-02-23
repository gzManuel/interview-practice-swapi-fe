import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from 'axios'

jest.mock('axios');

describe('App component', () => {
    test('Render 10 buttons', () => {
        render(<App />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(10);
    });

    test('Click button 1 and render Character component', async () => {
        const character = { name: "Luke Skywalker", birth_year: "19BBY", homeworld: "tatooine" }
        const response = { data: character };
        axios.get.mockResolvedValue(response);

        render(<App />);
        const buttons = screen.getAllByRole('button');

        userEvent.click(buttons[0]);

        await screen.findByText('Luke Skywalker');
        await screen.findByText("19BBY")
        await screen.findByText("tatooine")
    })
});