import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from 'axios'

jest.mock('axios');

describe('App component', () => {
    
    describe('When mounted',()=>{
        it('Should Render 10 buttons', () => {
            render(<App />);
            const buttons = screen.getAllByRole('button');
            expect(buttons).toHaveLength(10);
        });
        it(`Should Don't render character data`,()=>{
            render(<App/>);
            const characterData = screen.queryByTestId('character-data');
            expect(characterData).toBeEmptyDOMElement();
        })
    })

    describe('When click button',()=>{
        it('Should shows character data', async () => {
            const character = { name: "Luke Skywalker", birth_year: "19BBY", homeworld: "tatooine" }
            const response = { data: character };
            axios.get.mockResolvedValue(response);
            render(<App />);
            const buttons = screen.getAllByRole('button');

            userEvent.click(buttons[1]);
    
            await screen.findByText('Luke Skywalker');
            await screen.findByText("19BBY")
            await screen.findByText("tatooine")
        });
    })
});