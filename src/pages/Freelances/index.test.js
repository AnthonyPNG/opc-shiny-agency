import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";

import Freelances from ".";
import { ThemeProvider } from "../../utils/context";

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicien fullstack',
        picture: '',
    }
]

const server = setupServer(
    // On précise l'url
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // datas mockées en json
        return res(ctx.json({freelancersList: freelancersMockedData}))
    })
)

// Active la simulation API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation API une fois finie
afterAll(() => server.close())

it('Should render without crash', async () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )

    expect(screen.getByTestId('loader')).toBeTruthy()
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })
})