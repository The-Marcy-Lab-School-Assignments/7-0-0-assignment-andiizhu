import { Message } from './components/Message'
import { Languages } from './components/Languages'
import { FontSize } from './components/UpdateFontSize'
import { useState } from 'react'
import './App.css'

function App() {
  const LanguagesArr = [
    {name:"English", message:"Good Morning"}, 
    {name:"Chinese", message: "早上好"},
    {name:"Spanish", message: "Buenos días"}, 
    {name:"Haitian Creole", message: "Bonjou"}, 
    {name:"Portuguese", message:"Bom dia"}]

  const [message, setMessage] = useState("Good Morning")
  const [fontSize, setFontSize] = useState(34)

  return (
    <>
    <FontSize setFontSize={setFontSize} />
    <Message message={message} fontSize={fontSize} />
    <Languages LanguagesArr={LanguagesArr} setMessage={setMessage} />
    </>
  )
}

export default App
