import '../assets/navbar.css'


export function Navbar () {
    return (
    <div className="container">
            <div className="logo">
                <img src="../public/icons/coin.webp" alt="coin-icon" />
            </div>
            <nav>
                <a href="#header">
                     <button className="btn">Home</button>
                </a>
                <a href="#banner">
                     <button className="btn">Prices</button>
                </a>
                <a href="#footer">
                     <button className="btn">about me</button>
                </a>
            </nav>    
    </div>
    )
}