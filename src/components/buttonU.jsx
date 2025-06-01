import '../assets/buttonU.css'


export function ButtonGod({refreshCoin, symbol, currency}) {

    const handleClick = () => {
        return refreshCoin({newCoinPrice: currency})
    }

    return (
        <button onClick={handleClick}> {symbol} </button>
    )
}