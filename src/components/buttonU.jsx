import { useRef } from 'react'
import '../assets/buttonU.css'


export function ButtonGod({refreshCoin, symbol, currency, toast}) {
    const timeChangeCoin = useRef(false)

    const handleClick = () => {
        if(timeChangeCoin.current) {
            return toast('Please wait 25 seconds before changing currency',
                {
                  icon: '⏳',
                  style: {
                    borderRadius: '10px',
                    background: 'black',
                    color: 'white',
                    fontFamily: 'monospace',
                    border: '3px solid #DF6595'
                  },
                }
              );
        }

        refreshCoin({newCoinPrice: currency})

        timeChangeCoin.current = true
        setTimeout(()=>{
            timeChangeCoin.current = false
        },25000)
    }


    return (
        <button onClick={handleClick}> {symbol} </button>
    )
}