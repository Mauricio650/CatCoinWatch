import '../assets/card.css'

export function Card ({id,symbol,name,image, current_price, coin}) {
    return (
<div id={id} className="card">
        <img className="img" src={image} alt={'logo of ' + name} />
    <div className="textBox">
        <p className="text head">{name}</p>
        <span>{symbol}</span>
        <p className="text price">{current_price} {coin === 'usd' ? '$' : "€"}</p>
    </div>
</div>
    )
}