import React, {useState} from 'react'
import ContextComponent from './components/ContextComponent'
import {Button} from 'react-native';

export const ThemeContext = React.createContext()

export default function App() {

  const[darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return(
    <>
      <ThemeContext.Provider value={darkTheme}>
        <Button 
          title="Change Theme"
          onPress={toggleTheme}
        />
        <ContextComponent/>
      </ThemeContext.Provider>
    </>
  )
}