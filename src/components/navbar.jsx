import '../assets/navbar.css'


export function Navbar () {
    return (
    <div className="nav">
    <div className="container">
            <div className="logo">
                <img src="../public/icons/logoWeb.png" alt="coin-icon" />
            </div>
           <a href="#header"> <div className="btn">Home</div></a>
           <a href="#banner"> <div className="btn">Prices</div></a>
           <a href="#footer"> <div className="btn">about</div></a>
            <svg
            className="outline"
            overflow="visible"
            width="400"
            height="60"
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect
                className="rect"
                pathLength="100"
                x="0"
                y="0"
                width="400"
                height="60"
                fill="transparent"
                strokeWidth="5"
            ></rect>
            </svg>
    </div>
    </div>
    )
}