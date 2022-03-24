import Card from '../../components/Card'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'

function Freelances(){

    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]

    const CardContainer=styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);

    `

    return <CardContainer>
        {
        freelanceProfiles.map((profile,index)=>
        <Card
           key={`${profile.name}-${index}`}
           label={profile.jobTitle}
           title={profile.name}
           picture={profile.picture}   
        />)
        }
    </CardContainer>
}

export default Freelances