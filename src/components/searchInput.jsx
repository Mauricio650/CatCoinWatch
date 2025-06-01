import '../assets/searchInput.css'

export function SearchInput({inputRef,handleWrite}) {
    return (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input className='searchInput' ref={inputRef} id='input-coin' type="text" onChange={handleWrite} />
        </>
    )
}