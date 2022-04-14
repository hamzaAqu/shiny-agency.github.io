import Footer from './'
import { render, screen, fireEvent} from '@testing-library/react'
import {ThemeProvider} from '../../utils/context'


describe('tester que footer',()=>{
    test('tester que footer ne crache pas app', async ()=>{
        render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>)
         const nightModeButton = screen.getByRole('button')
         expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
         fireEvent.click(nightModeButton)
         expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
         //screen.debug()
    })
})