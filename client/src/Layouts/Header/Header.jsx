import React, { useState } from 'react'

// Styles
import "./header.scss"
import "./media.header.scss"

// Components
import { Navbar, Signin } from '../../Components'

// Icons
import { IoIosSearch } from "react-icons/io"



const Header = () => {
  const [searchInput, setSearchInput] = useState("")
  return (
    <header className='header'>
      <Navbar />
      <div className="container">
          <div className='header__main'>
            <div className='header__main-left'>
              <h1>Dasturlashga <br /> oid onlayn <br /> darslar</h1>
              <div className='header__main-left-input'> 
                <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Kursni qidirish" />
                <IoIosSearch />
              </div>
            </div>
            <div className='heade__main-right'></div>
          </div>
      </div>
      
    </header>
  )
}

export default Header