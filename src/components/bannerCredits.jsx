import {PollyPizzaSvg} from './icons.jsx'
import "../assets/bannerCredits.css"

export function Banner () {
    return (
        <article id="banner" className="Container-banner">
            <div className="Container-banner-con-logos-in">
               <div>
                    <a href="https://www.coingecko.com/" target="_blank">
                        <img className="logo-gecko" src="https://static.coingecko.com/s/coingecko-logo-5683263fd3ea8a4f152dd5f7299acfc5f84ee73955428acff22913b8e59e6c54.svg"
                        alt="logo of coingecko"  loading="lazy"/>
                    </a>
               </div>
               <div className="Container-banner-con-logos-polly">
                   <a href="https://poly.pizza/" target="_blank">
                        <PollyPizzaSvg/>   
                    </a>

                   <a className="polly-text" href="https://poly.pizza/" target="_blank">
                        <p>Polly.pizza</p>
                   </a>
               </div>
            </div>
        </article>
    )
}