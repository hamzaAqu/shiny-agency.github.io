import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";

function Survey(){
    
 const {questionNumber}= useParams()
 const nbrInt= parseInt(questionNumber)
 const nbrIntPre = nbrInt===1 ? 1 : nbrInt-1
 const nbrIntSuiv=nbrInt +1
 
return (<div>
        <h1>Questionnaire</h1>
        <h2>{questionNumber} question</h2>
        <Link to={`/survey/${nbrIntPre}`}>Precedent</Link>
        {
        nbrInt===10? (<Link to={`/results`}>Suivant</Link>)
        : (<Link to={`/survey/${nbrIntSuiv}`}>Suivant</Link>)
        }
       
    </div>)
}
export default Survey
