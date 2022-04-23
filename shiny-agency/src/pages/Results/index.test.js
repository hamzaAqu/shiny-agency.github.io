
import {formatJobList,formatQueryParams} from './'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'
import {rest} from'msw'
import {setupServer} from 'msw/node'
import {render} from '../../utils/test'


describe('faire les deux tests de formatJobList', ()=>{
    test('tester fonction formatJob',()=>{
        const expectedState = 'item2,'
        expect(formatJobList('item2',3, 1)).toEqual(expectedState)
    })
    test('verifier ne pas ajouter la virgule apres le dernier elmt', ()=>{
        const expectedState = 'item3'
        expect(formatJobList('item3',3, 2)).toEqual(expectedState)
    })
})

describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
      const expectedState = 'a1=answer1'
      expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
        expectedState
      )
    })
  })


  /* const resultsMockedData = [
    {
      title: 'seo',
      description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
      title: 'frontend',
      description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
  ]
  
 const server = setupServer(
    rest.get('http://localhost:8000/results',(req,res,ctx)=>{
        return res(ctx.json({resultsData: resultsMockedData}))
    })
)

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())


test('tester le results', async ()=>{
    render( <results /> )
   
  await waitForElementToBeRemoved(() => screen.queryByTestId('loaderResults'))
  expect(screen.getByTestId("resultsTitle").getByText("seo")).toBeInTheDocument()
  expect(screen.getByTestId("descriptionWrapper").getByText("Le SEO est en charge du référencement web d'une page")).toBeInTheDocument()
  expect(screen.queryByTestId('loaderResults')).not.toBeInTheDocument()
})  */
