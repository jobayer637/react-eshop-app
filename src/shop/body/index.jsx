import React, { Component } from 'react'
import Left from './left'
import Right from './right'

import { Row, Col } from 'reactstrap'


const Body = ({ products, filter, categories, handleCategoryFilter, categoryFilter }) => {
    return <>
        <Row className="my-4 pr-3">
            <Col md="3">
                <Left
                    categories={categories}
                    handleCategoryFilter={handleCategoryFilter}
                />
            </Col>
            <Col md="9">
                <Right
                    products={products}
                    filter={filter}
                    categoryFilter={categoryFilter}
                />
            </Col>
        </Row>
    </>
}

export default Body