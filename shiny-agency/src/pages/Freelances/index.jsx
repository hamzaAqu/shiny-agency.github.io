import Card from '../../components/Card'
import DefaultPicture from '../../assets/defaultPicture.png'

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

    return <div>
        {
        freelanceProfiles.map((profile,index)=>
        <Card 
           key={`${profile.name}-${index}`}
           label={profile.jobTitle}
           
           picture={profile.picture}   
        />)
        }
    </div>
}

export default Freelances