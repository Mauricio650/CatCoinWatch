import "../assets/bannerCredits.css"

export function Banner () {
    return (
        <article id="banner" className="Container-banner">
            <div className="Container-banner-con-logos-in">
               <div>
                    <a href="https://www.coingecko.com/" target="_blank">
                        <img className="logo-gecko" src="https://static.coingecko.com/s/coingecko-logo-5683263fd3ea8a4f152dd5f7299acfc5f84ee73955428acff22913b8e59e6c54.svg"
                        alt="logo of coingecko" />
                    </a>
               </div>
               <div className="Container-banner-con-logos-polly">
                   <a href="https://poly.pizza/" target="_blank">
                        <svg 
                            className="logo-polly" width="80px" focusable="false" 
                            viewBox="0 0 410 498" aria-hidden="true" style={{fontSize: "2em"}}>
                            <path fillRule="evenodd" clipRule="evenodd"
                            d="M178.287 105.494C178.287 97.0258 169.12 91.7334 161.787 95.9673L5.61391 186.135C2.21051 188.1 0.113937 191.731 0.113937 195.661V388.697C0.113937 392.627 2.21054 396.259 5.61397 398.224L172.787 494.74C176.19 496.705 180.383 496.705 183.787 494.74L350.961 398.224C354.365 396.259 356.462 392.627 356.462 388.697V208.849C356.462 200.382 347.295 195.089 339.961 199.323L194.787 283.142C187.454 287.376 178.287 282.084 178.287 273.616V105.494Z" fill="#FFA24D"></path>
                            <path fillRule="evenodd" clipRule="evenodd" 
                            d="M248.5 9.52631C241.167 5.2924 232 10.5848 232 19.0526V186.196C232 194.664 241.167 199.956 248.5 195.722L393.252 112.152C400.586 107.918 400.586 97.3332 393.252 93.0993L248.5 9.52631Z"
                            fill="#FFA24D"></path>
                        </svg>
                     </a>

                   <a className="polly-text" href="https://poly.pizza/" target="_blank">
                        <p>Polly.pizza</p>
                   </a>
               </div>
            </div>
        </article>
    )
}