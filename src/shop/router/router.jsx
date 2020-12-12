import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import View from '../view/view'
import Body from '../body/index'
import Header from '../header/index'
import Footer from '../footer/index'


const AllRouter = ({
    products, filter,
    categoryFilter, categories,
    handleCategoryFilter,
    handleChangeAddToCard,
    handleProductAddToCard,
    quantity,
    handleRatingChanged,
    ratings,
    handleSearch, handleCartModal, totalCarts
}) => {
    return <div className="">
        <Router>
            <Header
                filter={filter}
                handleSearch={handleSearch}
                handleCartModal={handleCartModal}
                totalCarts={totalCarts}
            />
            <Switch>
                <Route exact path='/'>
                    <Body
                        products={products}
                        filter={filter}
                        categoryFilter={categoryFilter}
                        categories={categories}
                        handleCategoryFilter={handleCategoryFilter}
                    />
                </Route>
                <Route path='/view:id'>
                    <View
                        products={products}
                        handleChangeAddToCard={handleChangeAddToCard}
                        handleProductAddToCard={handleProductAddToCard}
                        quantity={quantity}
                        handleRatingChanged={handleRatingChanged}
                        ratings={ratings}
                    />
                </Route>
            </Switch>
            
            <Footer />
        </Router>
    </div >
}

export default AllRouter