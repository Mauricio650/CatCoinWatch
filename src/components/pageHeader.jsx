import '../assets/pageHeader.css'
import { CatModel } from './CatModel'
import {Navbar} from './navbar'

export function PageHeader () {


    return (
        <section id='header' className="container-PH">
            <article className='container-PH-article'>
               
                <div className='container-PH-container-text'>
                <aside className="container-navbar" >
                    <Navbar />
               </aside>
                    <h1>CatCoinWacth</h1>
                    <p><em>Watches the market as a cat would: with elegance and precision.</em></p>
                </div>
                <div className='container-PH-container-img'>
                    <CatModel />
                </div>
            </article>
        </section>

        
    )
}