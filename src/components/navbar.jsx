import '../assets/navbar.css'


export function Navbar () {
    return (
    <div className="nav">
    <div className="container">
            <div className="logo">
                <img src="../public/icons/coin.webp" alt="coin-icon" />
            </div>
           <a href="#header"> <div className="btn">Home</div></a>
           <a href="#banner"> <div className="btn">Prices</div></a>
           <a href="#footer"> <div className="btn">about</div></a>
    </div>
    </div>
    )
}