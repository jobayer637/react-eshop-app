import React, { Component } from 'react'

import Header from './header/index'
import Body from './body/index'
import Footer from './footer/index'
import axios from 'axios';
import AllRouter from './router/router'

class Shop extends Component {

    state = {
        products: [],
        filter: '',
        categoryFilter: '',
        categories: []
    }

    componentDidMount = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const cat = []
                response.data.filter(product => cat.push(product.category))
                this.setState({
                    products: this.state.products.concat(response.data),
                    categories: [...new Set(cat)]
                })
            })
    }

    handleSearch = event => {
        this.setState({
            filter: event.target.value,
            categoryFilter: ''
        })
    }

    handleCategoryFilter = category => {
        this.setState({
            categoryFilter: category,
            filter: ''
        })
    }

    render() {
        return <div className="container my-3">
            <div className="px-5">

                <Header
                    filter={this.state.filter}
                    handleSearch={this.handleSearch}
                />

                <AllRouter
                    products={this.state.products}
                    filter={this.state.filter}
                    categoryFilter={this.state.categoryFilter}
                    categories={this.state.categories}
                    handleCategoryFilter={this.handleCategoryFilter}
                />
                
                <Footer />
            </div>
        </div>
    }
}

export default Shop