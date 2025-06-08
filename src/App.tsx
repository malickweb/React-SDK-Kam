//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Menu } from './components/Header/Menu/Menu';
import { Footer } from './components/Footer/Footer';
import { Homepage } from './pages/Homepage';
import { ProductsList } from './pages/ProductList';
import { Product } from './pages/Product';
import { ProductSearch } from './pages/ProductSearch';
// import { KamInit } from './components/KameloonPerso/KamInit';

import ErrorPage from './pages/404/404';

let { KameleoonClient } = require('kameleoon-client-javascript');

const App = () => {
    // const [isVariationId, setVariationId] = useState<number>(0);

    const siteCode: string = 'y5ofsuw2jj';
    let kameleoonClient = new KameleoonClient(siteCode, false, {
        actions_configuration_refresh_interval: 5,
    });
    let visitorCode = kameleoonClient.obtainVisitorCode('http://localhost:3000');
    // const { variationID, recommendedProductsNumber } = KamInit(siteCode, visitorCode, 130895);
    // // console.log('variationID === >', variationID);
    // // console.log('variationIDs === >', variationIDs);
    // // console.log('recommendedProductsNumber === >', recommendedProductsNumber);
    // // console.log('visitorCode', visitorCode);
    // if (isVariationId !== variationID) {
    //     setVariationId(variationID);
    //     // console.log('if = variationID', variationID);
    // }
    return (
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {/* <Route path="/product">
                        <ProductList Data={isVariationId} />
                    </Route> */}
                    {/* <Route exact path="/product" children={<ProductsList variation={isVariationId} nbrProduct={recommendedProductsNumber} />} /> */}
                    <Route exact path="/product" children={<ProductsList sitecode={siteCode} visitorcode={visitorCode} />} />
                    {/* <Route path="/product/:id" children={<Product variation={isVariationId} nbrProduct={recommendedProductsNumber} />} /> */}
                    <Route path="/product/:id" children={<Product sitecode={siteCode} visitorcode={visitorCode} />} />
                    {/* <Route path="/kam" component={Kam} /> */}
                    <Route path="/productSearch" component={ProductSearch} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
