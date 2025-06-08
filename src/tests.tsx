export {};
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';

// import { Menu } from './components/Header/Menu/Menu';
// import { Footer } from './components/Footer/Footer';
// import { Homepage } from './pages/Homepage';
// import { ProductsList } from './pages/ProductList';
// import { Product } from './pages/Product';
// import { ProductSearch } from './pages/ProductSearch';
// import { KamInit } from './components/KameloonPerso/KamInit';

// import ErrorPage from './pages/404/404';

// let { KameleoonClient, KameleoonException } = require('kameleoon-client-javascript');

// // const a = KamExpe();
// // a.then((result: number) => {
// //     console.log('resolved', result);
// // });
// // console.log('A ====> ', a);
// const App = () => {
//     const [isVariationId, setVariationId] = useState<number>(0);

//     let siteCode = 'y5ofsuw2jj';
//     let kameleoonClient = new KameleoonClient(siteCode, false, {
//         actions_configuration_refresh_interval: 5,
//     });
//     let visitorCode = kameleoonClient.obtainVisitorCode('http://localhost:3000');
//     const a = KamInit(siteCode, visitorCode);
//     console.log('A === >', a);
//     console.log('visitorCode', visitorCode);
//     let variationID: number = 0;
//     let recommendedProductsNumber: number = 5;

//     // useEffect(() => {
//     //     (async () => {
//     //         const products = await KamExpe();
//     //         console.log('USEEFFECT ==>', products);
//     //     })();
//     // }, []);

//     kameleoonClient.runWhenReady(
//         function () {
//             try {
//                 variationID = kameleoonClient.triggerExperiment(visitorCode, 130895);
//                 console.log('variationID ===> ', variationID);
//             } catch (e: any) {
//                 if (e.type === KameleoonException.NotTargeted.type) {
//                     variationID = 0;
//                 }
//                 if (e.type === KameleoonException.NotActivated.type) {
//                     variationID = 0;
//                 }
//                 if (e.type === KameleoonException.ExperimentConfigurationNotFound.type) {
//                     variationID = 0;
//                 }
//             }
//             if (variationID === 0) {
//                 recommendedProductsNumber = 5;
//             } else if (variationID === 571873) {
//                 recommendedProductsNumber = 10;
//             } else if (variationID === 571874) {
//                 recommendedProductsNumber = 8;
//             } else if (variationID === 571937) {
//                 recommendedProductsNumber = 2;
//             }
//             console.log('variationID00', variationID);
//             if (isVariationId !== variationID) {
//                 setVariationId(variationID);
//                 console.log('if = variationID', variationID);
//             }
//             console.log('variationID', variationID);
//             console.log('isVariationId', isVariationId);
//             console.log('recommendedProductsNumber', recommendedProductsNumber);
//             return <div>{recommendedProductsNumber}</div>;
//         },
//         function () {
//             console.log('Timeout occured in the JavaScript SDK initialization.');
//         },
//         2000
//     );
//     return (
//         <Router>
//             <div>
//                 <Menu />
//                 <Switch>
//                     <Route exact path="/" component={Homepage} />
//                     {/* <Route path="/product">
//                         <ProductList Data={isVariationId} />
//                     </Route> */}
//                     <Route exact path="/product" children={<ProductsList variation={isVariationId} nbrProduct={recommendedProductsNumber} />} />
//                     <Route path="/product/:id" children={<Product variation={isVariationId} nbrProduct={recommendedProductsNumber} />} />
//                     {/* <Route path="/kam" component={Kam} /> */}
//                     <Route path="/productSearch" component={ProductSearch} />
//                     <Route path="*" component={ErrorPage} />
//                 </Switch>
//                 <Footer />
//             </div>
//         </Router>
//     );
// };

// export default App;
