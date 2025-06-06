import { InputSvg } from './icons'
import '../assets/searchInput.css'

export function SearchInput({inputRef,handleWrite}) {
    return (
        <>
         <InputSvg />
        <input className='searchInput' ref={inputRef} id='input-coin' type="text" onChange={handleWrite} />
        </>
    )
}