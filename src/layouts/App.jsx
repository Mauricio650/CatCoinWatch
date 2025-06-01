import { Banner } from '../components/bannerCredits'
import { ContainerCoins } from '../components/ContainerCoins'
import { PageHeader } from '../components/pageHeader.jsx'
import {Navbar} from '../components/navbar.jsx'
import {FixedNavar} from '../components/FixedNav.jsx'
import '../assets/app.css'



function App() {

  return (
    <>
        <header className='container-navbar'>
          <Navbar />
        </header>
        <PageHeader />
        <main  className='container-page'>
          <Banner />
          <ContainerCoins />
        </main>
        <FixedNavar></FixedNavar>
    </> 
  )
}

export default App
