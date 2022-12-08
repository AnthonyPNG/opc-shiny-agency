import { render, screen, fireEvent } from "@testing-library/react";
import Card from ".";
import { ThemeProvider } from '../../utils/context'
import DefaultPicture from '../../assets/profile.png'

describe('The Card component', () => {
    test('should give picture and title', async () => {
        render(
            <ThemeProvider>
                <Card
                    label="Develops"
                    title="Tom Crack"
                    picture={DefaultPicture}
                />
            </ThemeProvider>
        )

        const image = screen.getByRole('img')
        const text = screen.getByText("Tom Crack")
        expect(image.src).toBe('http://localhost/profile.png')
        expect(text.textContent).toBe(" Tom Crack ")
    })

    test('shoud give star', async () => {
        render(
            <ThemeProvider>
                <Card
                    label="Develops"
                    title="Tom Crack"
                    picture={DefaultPicture}
                />
            </ThemeProvider>
        )

        const text = screen.getByText("Tom Crack")
        const node = text.closest('div')
        fireEvent.click(node)
        expect(text.textContent).toBe("⭐️ Tom Crack ⭐️")
    })
})