import {
    Modal, ModalBody, Card, CardBody, CardHeader,
    ModalFooter, Button, Table, ListGroup, ListGroupItem, Badge
} from 'reactstrap'


const Cart = ({ products, isOpen, handleCartModal }) => {
    let sum = 0
    let vat = 0

    products.map(product => {
        sum += product.totalPrice
        vat += parseInt(product.totalPrice) * .05
    })
    let totalSum = sum + vat

    return <div>
        <Modal size="lg" isOpen={isOpen}>
            <ModalBody>
                <Card>
                    <CardBody>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(product => {
                                    return (
                                        <tr>
                                            <td>
                                                <img style={{ maxWidth: '200px', maxHeight: '150px' }} src={product.image} alt={product.title} />
                                                <p>{product.productTitle}</p>
                                            </td>
                                            <td className="align-middle"><Badge color="warning">{product.unitPrice.toPrecision(8)}</Badge></td>
                                            <td className="align-middle"><Badge color="danger">{product.quantity}</Badge></td>
                                            <td className="align-middle"><Badge color="dark">{product.totalPrice.toPrecision(8)}</Badge></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </CardBody>

                </Card>
            </ModalBody>

            <ModalBody>
                <Card>
                    <CardHeader className="text-right">
                        <h6>ORDER SUMMERY</h6>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-between">
                        <div className="">
                            <small>Note: Discount voucher can be applied on Checkout Step 3</small><br />
                        </div>
                        <div>
                            <ListGroup>
                                <ListGroupItem className="justify-content-between border-0">
                                    <strong>Cart Sub Total:	</strong> <Badge color="warning" className="float-right ml-3">${sum.toPrecision(8)}</Badge>
                                </ListGroupItem>
                                <ListGroupItem className="justify-content-between border-0">
                                    <strong>Vat:</strong> <Badge color="warning" className="float-right ml-3">${vat.toPrecision(8)}</Badge>
                                </ListGroupItem>
                                <ListGroupItem className="justify-content-between border-0">
                                    <strong>Total Cart Amount:</strong> <Badge color="primary" className="float-right ml-3">${totalSum.toPrecision(8)}</Badge>
                                </ListGroupItem>
                            </ListGroup>

                        </div>
                    </CardBody>
                </Card>
            </ModalBody>

            <ModalFooter>
                <Button color="danger" className='rounded-0' onClick={handleCartModal}>Close</Button>
            </ModalFooter>
        </Modal>
    </div>
}

export default Cart