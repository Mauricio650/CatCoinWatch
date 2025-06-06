import '../assets/pageHeader.css'
import {Navbar} from '../components/navbar.jsx'
import { CatModel } from './CatModel'



export function PageHeader () {


    return (
        <section id='header' className="container-PH">
            <article className='container-PH-article'>
                <div className='container-PH-container-text'>
                <header className='container-navbar'>
                    <Navbar />
                </header>
                    <h1>CatCoinWacth</h1>
                    <p><em>Watches the market with the elegance and precision of a cat</em></p>
                </div>
                <div className='container-PH-container-img'>
                    <CatModel />
                </div>
            </article>
        </section>

        
    )
}