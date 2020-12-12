import {
    Card, CardImg, CardText,
    CardSubtitle, CardBody, Badge, Spinner
} from 'reactstrap';

import { Link } from 'react-router-dom'

const Right = ({ products, filter, categoryFilter }) => {
    const filterData = filter !== '' ? filter : categoryFilter
    return <div className="row">
        {products.length === 0 && <div>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="dark" />
        </div>}
        {products.filter(product => {
            if (filterData === '' || null) {
                return product
            }
            else if (product.category === filterData || product.title.toLowerCase().includes(filterData.toLowerCase())) {
                return product
            }

        }).map(product => (
            <Card className="border-0 col-md-4 px-4 shadow hover mb-3 rounded-0">
                <Link to={"/view" + product.id}>
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


export default Right
