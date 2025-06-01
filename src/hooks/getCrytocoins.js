import { useState, useEffect } from "react";
import { getCoins } from "../services/getCoins";


export function useGetCryptocoins () {
    const [coin,setCoin] = useState('usd')
    const [data, setData] = useState([])

    const refreshCoin = ({newCoinPrice}) => {
        setCoin(newCoinPrice)
    }


  useEffect(()=> {

    
    const fetchCoins = async () => {
      try {
        const json = await getCoins({coin})
        setData(json)
      } catch (e) {
        setData([])
        throw new Error('Error seraching coins',e.message)
      }
      
    }
    
     
    fetchCoins()

    const functionFetch = setInterval(fetchCoins,60000)
    

    return () => {
      return clearInterval(functionFetch)
    }

  },[coin])

  return {data, refreshCoin,coin}

}