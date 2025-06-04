import { Banner } from '../components/bannerCredits'
import { ContainerCoins } from '../components/ContainerCoins'
import { PageHeader } from '../components/pageHeader.jsx'
import {Navbar} from '../components/navbar.jsx'
import {FixedNavar} from '../components/FixedNav.jsx'
import { Footer } from '../components/Footer.jsx'
import toast, { Toaster } from 'react-hot-toast';
import '../assets/app.css'




function App() {

  return (
    <>  
       <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
       </div>

       <FixedNavar/>
        <header className='container-navbar'>
          <Navbar />
        </header>

        <PageHeader />

        <main  className='container-page'>
          <Banner />
          <ContainerCoins toast={toast}/>
        </main>
        <Footer/>
        
    </> 
  )
}

export default App
