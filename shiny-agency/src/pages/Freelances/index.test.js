import { screen, waitForElementToBeRemoved} from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import Freelances from "./";
import {render} from '../../utils/test'
import '@testing-library/jest-dom/extend-expect'


const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/freelances',(req,res,ctx)=>{
        return res(ctx.json({freelancersList: freelancersMockedData}))
    })
)

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())


test('tester le loader', async ()=>{
    render( <Freelances /> )
   
  await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
  expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})



