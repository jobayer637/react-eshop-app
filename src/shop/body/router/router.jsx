import Route from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

const AllRouter = props => {
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

export default AllRouter