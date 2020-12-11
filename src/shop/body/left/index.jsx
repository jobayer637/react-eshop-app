import React from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap';

const Left = ({ categories, handleCategoryFilter }) => {
    return <div className="my-3 bg-light">
        <ListGroup>
            <ListGroupItem
                onClick={() => handleCategoryFilter('')}
                action
                tag="button"
                className="justify-content-between">
                All
            </ListGroupItem>

            {categories.map(category => (
                <ListGroupItem
                    onClick={() => handleCategoryFilter(category)}
                    action
                    tag="button"
                    className="justify-content-between">
                    {category}
                </ListGroupItem>
            ))}
        </ListGroup>

    </div>
}

export default Left