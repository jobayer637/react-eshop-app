import React, { Component } from 'react'

import Header from './header/index'
import Body from './body/index'
import Footer from './footer/index'
import axios from 'axios';
import AllRouter from './router/router'
import CartModal from './cart/index'

class Shop extends Component {

    state = {
        products: [],
        filter: '',
        categoryFilter: '',
        categories: [],
        quantity: 1,
        cart: [],
        cartModalIsOpen: false
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

    handleChangeAddToCard = event => {
        this.setState({ quantity: event.target.value })
    }

    handleProductAddToCard = id => {
        const product = this.state.products.find(product => product.id === id)
        const prevCart = [...this.state.cart]
        const findPrev = prevCart.findIndex(cart => cart.productId === product.id)
        const storePrev = prevCart[findPrev]
        if (storePrev) {
            storePrev.totalPrice += (product.price * this.state.quantity)
            storePrev.quantity = parseInt(storePrev.quantity) + parseInt(this.state.quantity)
        }


        const cart = {
            userId: 1,
            productId: product.id,
            productTitle: product.title,
            quantity: this.state.quantity,
            unitPrice: product.price,
            totalPrice: this.state.quantity * product.price,
            image: product.image
        }

        if (findPrev === -1) {
            this.setState({
                cart: this.state.cart.concat(cart),
                quantity: 1
            }, () => {
                //console.log(this.state.cart)
            })
        } else {
            this.setState({
                cart: prevCart,
                quantity: 1
            })
            // console.log(storePrev)
        }

    }

    handleCartModal = () => {
        this.setState({ cartModalIsOpen: !this.state.cartModalIsOpen})
    }

    render() {
        return <div className="container my-3">
            <div className="px-5">

                <Header
                    filter={this.state.filter}
                    handleSearch={this.handleSearch}
                    handleCartModal={this.handleCartModal}
                    totalCarts={this.state.cart.length}
                />

                <CartModal
                    isOpen={this.state.cartModalIsOpen}
                    handleCartModal={this.handleCartModal}
                    products={this.state.cart}
                />

                <AllRouter
                    products={this.state.products}
                    filter={this.state.filter}
                    categoryFilter={this.state.categoryFilter}
                    categories={this.state.categories}
                    handleCategoryFilter={this.handleCategoryFilter}
                    handleChangeAddToCard={this.handleChangeAddToCard}
                    handleProductAddToCard={this.handleProductAddToCard}
                    quantity={this.state.quantity}
                />

                <Footer />
            </div>
        </div>
    }
}

export default Shop