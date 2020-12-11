import React from 'react';
import { Media } from 'reactstrap';

import {
    useParams
} from "react-router-dom";

const View = ({ products }) => {

    let { id } = useParams();
    const product = products.find(product => product.id.toString() === id.toString())
    if (!product) {
        return (
            <div> something went wrong </div>
        )
    } else {
        return (
            <Media>
                <Media left href="#">
                    <Media style={{ maxWidth: "300px" }} object src={product.image} alt="Generic placeholder image" />
                </Media>
                <Media body className="px-5">
                    <Media heading>
                        {product.title}
                    </Media>
                    {product.description}
                </Media>
            </Media>
        )
    }
}

export default View;