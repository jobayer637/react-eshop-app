import React from 'react'
import HeaderNav from './navbar'

const Header = ({ filter, handleSearch }) => {
    return <>
        <HeaderNav
            filter={filter}
            handleSearch={handleSearch}
        />
    </>
}

export default Header