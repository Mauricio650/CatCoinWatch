import { Banner } from '../components/bannerCredits'
import { ContainerCoins } from '../components/ContainerCoins'
import { PageHeader } from '../components/pageHeader.jsx'
import '../assets/app.css'



function App() {

  return (
    <>
        <PageHeader />
        <main  className='container-page'>
          <Banner />
          <ContainerCoins />
        </main>
    </> 
  )
}

export default App
