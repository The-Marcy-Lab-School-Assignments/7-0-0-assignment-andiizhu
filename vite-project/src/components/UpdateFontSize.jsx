export const FontSize = ({setFontSize}) => {
    const handleIncrease = () => {
        setFontSize((curr) => curr + 2)

    }
    const handleDecrease = () => {
        setFontSize((curr) => curr - 2)

    }

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
        </div>

    )
}