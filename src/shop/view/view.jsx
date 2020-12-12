import ReactStars from "react-rating-stars-component";
import React from 'react';
import {
    Media, Card, CardBody, Input, InputGroup, Button, Row, Col, Progress, Spinner, CardFooter
} from 'reactstrap';

import {
    useParams
} from "react-router-dom";

import { Link } from 'react-router-dom'


const View = ({ products, handleChangeAddToCard, handleProductAddToCard, quantity, handleRatingChanged, ratings }) => {
    let rating = {
        productId: 0,
        userId: 0,
        totalRating: 0,
        star: [
            { rate: 1, count: 0 },
            { rate: 2, count: 0 },
            { rate: 3, count: 0 },
            { rate: 4, count: 0 },
            { rate: 5, count: 0 },
        ]
    }
    const ratingChanged = newRating => {
        handleRatingChanged([newRating, product.id])
    }
    let { id } = useParams();
    const product = products.find(product => product.id.toString() === id.toString())
    if (!product) {
        return (
            <div>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="dark" />
            </div>
        )
    } else {
        rating = ratings.find(rat => rat.productId === product.id)
        let totalRatingSum = 0
        rating && rating.star.map((rate, index) => {
            totalRatingSum += (rate.count * (index + 1))
        })
        return (
            <div className="border mt-2">
                <Media className="p-3">
                    <Media left href="#">
                        <Media style={{ maxWidth: "300px" }} object src={product.image} alt="Generic placeholder image" />
                    </Media>
                    <Media body className="px-5">
                        <Media heading> {product.title} </Media>
                        <strong className="text-success">OUR PRICE: ${product.price}</strong>
                        <p className="mt-4">{product.description}</p>

                        <Card className="rounded-0 mt-5">
                            <CardBody>
                                <InputGroup>
                                    <Button className="rounded-0">Quantity</Button>
                                    <Input onChange={handleChangeAddToCard} type="number" value={quantity} className="col-md-3 ml-3 rounded-0" />
                                    <Button className="rounded-0 ml-4 btn-info" disabled>${quantity * product.price}</Button>
                                </InputGroup>
                                <Button onClick={() => handleProductAddToCard(product.id)} className="float-right rounded-0" color="warning">Add To Card</Button>
                            </CardBody>
                        </Card>
                    </Media>
                </Media>

                <Card className="px-3 rounded-0 mt-4 bg-light">
                    <CardBody>
                        <Row>
                            <Col md="5">
                                <h3>Customer reviews</h3>
                                <ReactStars
                                    isHalf={false}
                                    count={5}
                                    value={rating && Math.floor(totalRatingSum / rating.totalRating)}
                                    onChange={ratingChanged}
                                    color2={'#ffd700'}
                                    size="50"
                                />
                                <h5>Rating: {rating && Math.floor(totalRatingSum / rating.totalRating)} out of 5</h5>
                            </Col>
                            <Col md="7">

                                {rating && rating.star.map((st, index) => (
                                    <Row>
                                        <Col md="2">{index + 1} star</Col>
                                        <Col md="8"> <Progress value={rating && (rating.star[index].count * 100) / rating.totalRating}></Progress> </Col>
                                        <Col md="2"> {Math.floor(rating && (rating.star[index].count * 100) / rating.totalRating)} %</Col>
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="border-0 bg-light">
                        <Link to='/'>Back to Home</Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default View;