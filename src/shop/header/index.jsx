import React from 'react'
import HeaderNav from './navbar'

const Header = ({ filter, handleSearch }) => {
    return <div className="">
        <HeaderNav
            filter={filter}
            handleSearch={handleSearch}
        />
    </div>
}

export default Header