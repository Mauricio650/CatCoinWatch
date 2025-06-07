import '../assets/navbar.css'


export function Navbar () {
    return (
    <div className="container">
            <div className="logo">
                <img src="icons/coin.webp" alt="coin-icon" />
            </div>
            <nav className='nav-container'>
                <a href="#header">
                     <button className="btn">Home</button>
                </a>
                <a href="#banner">
                     <button className="btn">Prices</button>
                </a>
                <a href="#footer">
                     <button className="btn">about</button>
                </a>
            </nav>    
    </div>
    )
}