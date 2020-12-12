import React, { Component } from 'react'
import swal from 'sweetalert';

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
        cartModalIsOpen: false,
        ratings: []
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
                swal({
                    title: "Thank You!",
                    text: "Your Product has been added to cart list",
                    icon: "success",
                    button: "Close",
                });
            })
        } else {
            this.setState({
                cart: prevCart,
                quantity: 1
            }, () => {
                swal({
                    title: "Thank You for adding more product!",
                    text: "Your Product has been added(updated) to cart list",
                    icon: "success",
                    button: "Close",
                });
            })
        }

    }

    handleCartModal = () => {
        this.setState({ cartModalIsOpen: !this.state.cartModalIsOpen })
    }

    handleRatingChanged = (r) => {
        const rat = Math.floor(r[0])
        const id = r[1]

        const rating = {
            productId: id,
            userId: 21,
            totalRating: 0,
            star: [
                { rate: 1, count: 0 },
                { rate: 2, count: 0 },
                { rate: 3, count: 0 },
                { rate: 4, count: 0 },
                { rate: 5, count: 0 },
            ]
        }
        let findStar = rating.star.findIndex(s => parseInt(s.rate) === parseInt(rat))
        rating.star[findStar].count = parseInt(rating.star[findStar].count) + 1
        rating.totalRating = 1
        rating.star.concat(findStar)

        const prevRatings = [...this.state.ratings]
        const prevRating = prevRatings.findIndex(rat => rat.productId === rating.productId)


        if (prevRating === -1) {
            this.setState({
                ratings: this.state.ratings.concat(rating)
            }, () => {
                //console.log(this.state.ratings)
            })
        } else {
            prevRatings[prevRating].totalRating += 1
            prevRatings[prevRating].star[rat - 1].count += 1
            this.setState({
                ratings: prevRatings
            }, () => {
                //console.log(this.state.ratings)
            })
        }
    }

    render() {
        return <div className="container my-3">
            <div className="px-5">

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
                    handleRatingChanged={this.handleRatingChanged}
                    ratings={this.state.ratings}

                    handleSearch={this.handleSearch}
                    handleCartModal={this.handleCartModal}
                    totalCarts={this.state.cart.length}
                />

                
            </div>
        </div>
    }
}

export default Shop