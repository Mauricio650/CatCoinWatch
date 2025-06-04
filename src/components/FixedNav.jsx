import '../assets/fixedNavar.css'

export function FixedNavar () {
    return (
        <header className="header-fix">
            <div className="logo-fix">
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
        </header>
    )
}