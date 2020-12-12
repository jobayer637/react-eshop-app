import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import View from '../view/view'
import Body from '../body/index'


const AllRouter = ({
    products, filter,
    categoryFilter, categories,
    handleCategoryFilter,
    handleChangeAddToCard,
    handleProductAddToCard,
    quantity,
    handleRatingChanged,
    ratings
}) => {
    return <div className="px-2 my-3">
        <Router>
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
        </Router>
    </div >
}

export default AllRouter