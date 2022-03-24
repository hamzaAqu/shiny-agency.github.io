import { Link } from "react-router-dom";
import styled from 'styled-components'
import colors from '../../utils/style/colors'



function Header(){

    const StyledLink=styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props)=> props.$isFullLink && `color: black; border-radius: 30px;
    background-color: ${colors.primary};`}
    `
return(     
<nav>
    <StyledLink to="/">Accueil</StyledLink>
    <StyledLink to="/survey/1" $isFullLink>Faire un test</StyledLink>
    <StyledLink to="/freelances">Freelances</StyledLink>
</nav>
        
    )
}
export default Header
