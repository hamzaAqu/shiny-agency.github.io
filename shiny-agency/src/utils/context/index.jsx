import { createContext, useState } from "react";

//contexte lié au thème
export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
//contexte lié au survey

export const SurveyContext= createContext()
export const SurveyProvider = ({ children})=>{
const [answers,setAnswers]=useState({})
const saveAnswers=(newAnswers)=>{
    setAnswers({...answers,...newAnswers})
}
return(
<SurveyContext.Provider value={{answers,saveAnswers}}> {children}</SurveyContext.Provider>
)
}
