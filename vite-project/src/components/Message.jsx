export const Message = ({message, fontSize}) => {
    const messageFontSize = {
        fontSize:`${fontSize}px`
    }
    return <h1 style={messageFontSize}>{message}</h1>
}
