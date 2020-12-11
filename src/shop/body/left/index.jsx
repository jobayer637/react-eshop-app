import React from 'react'
import { ListGroup, ListGroupItem, } from 'reactstrap';

const Left = ({ categories, handleCategoryFilter }) => {
    return <div className=" bg-light sticky-top shadow">
        <ListGroup className="rounded-0">
            <ListGroupItem
                onClick={() => handleCategoryFilter('')}
                action
                tag="button"
                className="justify-content-between border-0">
                All
            </ListGroupItem>

            {categories.map(category => (
                <ListGroupItem
                    onClick={() => handleCategoryFilter(category)}
                    action
                    tag="button"
                    className="justify-content-between border-0">
                    {category}
                </ListGroupItem>
            ))}
        </ListGroup>

    </div>
}

export default Left