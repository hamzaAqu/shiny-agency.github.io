import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch} from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import {useTheme} from '../../utils/hooks'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export function formatJobList(title,length,index){
  if(index === length-1){return title}
return `${title},`
}

export function formatQueryParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatQueryParams(answers)
  
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  if (error) {
    return <span>Il y a un probl??me</span>
  }

  const resultsData = data?.resultsData

  return isLoading ? (
    <LoaderWrapper>
      <Loader  testid="loaderResults"/>
    </LoaderWrapper>
  ) : (
   
    <ResultsContainer theme={theme}>
      <ResultsTitle testid="resultsTitle" >
        Les comp??tences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title,resultsData.length,index)}
              {/* {result.title} */}
              {/* {index === resultsData.length - 1 ? '' : ','} */}
            </JobTitle>
          ))}
      </ResultsTitle>

      <StyledLink $isFullLink to="/freelances">
        D??couvrez nos profils
      </StyledLink>

      <DescriptionWrapper testid="descriptionWrapper">
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              key={`result-detail-${index}-${result.title}`}
              theme={theme}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p theme={theme}>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results