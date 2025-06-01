import { useGetCryptocoins } from '../hooks/getCrytocoins.js'
import { useRef } from 'react'
import { CoinList } from './CoinList.jsx'
import { SearchInput } from './searchInput.jsx'
import { ButtonGod } from './buttonU.jsx'
import '../assets/ContainerCoins.css'


export function ContainerCoins () {
    const {data, refreshCoin, coin} = useGetCryptocoins()
    const inputRef = useRef(null)
    const ulRef = useRef(null)

      const handleWrite = () => {
        
        ulRef.current.childNodes.forEach((e)=>{
          if(e.dataset.value.includes(inputRef.current.value.toLowerCase())){
            e.classList.remove('remove')
          }else if(inputRef.current.value.toLowerCase() === ''){
              e.classList.remove('remove')
          }
          else{
            e.classList.add('remove')
          }
        })
      }

    return (
        <>
         <section className='container-main'>
          <div className='container-search'>
            <SearchInput inputRef={inputRef} handleWrite={handleWrite}/>
          </div>
          <div className='container-btns'>
            <ButtonGod refreshCoin={refreshCoin} symbol={'€'} currency={'eur'} />
            <ButtonGod refreshCoin={refreshCoin} symbol={'$'} currency={'usd'} />
          </div>
          <CoinList coin={coin} data={data} ulRef={ulRef}/>
         </section>
        </>
      )
}