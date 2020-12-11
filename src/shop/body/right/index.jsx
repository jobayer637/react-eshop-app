import React, { Component } from 'react'
import View from './view'

import {
    Card, CardImg, CardText,
    CardSubtitle, CardBody, Badge
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

const AllProducts = ({ products, filter, categoryFilter }) => {
    const category = filter !== '' ? filter : categoryFilter
    return <div className="row">
        {products.filter(product => {
            if (category === '' || null) {
                return product
            }
            else if (product.category === category || product.title.toLowerCase().includes(category.toLowerCase())) {
                return product
            }

        }).map(product => (
            <Card className="border-0 col-md-4 px-4 shadow hover mb-3 rounded-0">
                <Link to={"/view"+product.id}>
                    <CardImg top width="100%" src={product.image} alt="Card image cap" style={{ maxHeight: "220px", minHeight: "220px" }} />
                    <CardBody>
                        <Badge color="warning" className="mb-2">{product.category}</Badge>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{product.title}</CardSubtitle>
                        <CardText>{product.price}</CardText>
                    </CardBody>
                </Link>
            </Card>

        ))}

    </div>
}

const Right = ({ products, filter, categoryFilter }) => {
    return <div className="px-2 my-3">
        <Router>
            <Switch>
                <Route exact path='/'>
                    <AllProducts
                        products={products}
                        filter={filter}
                        categoryFilter={categoryFilter}
                    />
                </Route>
                <Route path='/view:id'>
                    <View
                        products={products}
                    />
                </Route>
            </Switch>
        </Router>
    </div >
}

export default Right
