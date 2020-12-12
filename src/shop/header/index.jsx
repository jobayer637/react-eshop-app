import React from 'react'
import HeaderNav from './navbar'

const Header = ({ filter, handleSearch, totalCarts, handleCartModal }) => {
    return <div className="">
        <HeaderNav
            filter={filter}
            handleSearch={handleSearch}
            totalCarts={totalCarts}
            handleCartModal={handleCartModal}
        />
    </div>
}

export default Header