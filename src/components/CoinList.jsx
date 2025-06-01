import { Card } from "./card"

export function CoinList({data,coin,ulRef}) {

    return (
         <ul ref={ulRef} className='list-coins'>
                      { data ?
                        data.map(e => {
                          const {id,symbol,name,image, current_price} = e
                          
                          return <li data-value={name.toLowerCase()} key={id}>
                            <Card id={id} coin={coin} symbol={symbol} name={name} image={image} current_price={current_price}/>
                            </li>
                        })
                        :
                        <h1>Error, Please try again!</h1>
                      }
        </ul>
    )
}