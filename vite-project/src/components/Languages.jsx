export const Languages = ({LanguagesArr, setMessage}) => {
  
    const handleClick = (newMessage) => {
        setMessage(newMessage)
    }
    
    return (
        <ul>
            {LanguagesArr.map((e, index) => (
                <li key={index+1}>
                    <button onClick={() => handleClick(e.message)}>{e.name}</button>
                </li>
            ))}
        </ul>
    )
}
