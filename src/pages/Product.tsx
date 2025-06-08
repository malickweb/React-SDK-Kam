import React from 'react';
import { useParams, Route } from 'react-router-dom';
import ErrorPage from './404/404';
//import { Number } from '../interfaces/Interfaces';
import { KamInit } from '../components/KameloonPerso/KamInit';

import products from '../json/Product';

interface SiteCode {
    sitecode: string;
    visitorcode: string;
}

// export const Product: Function = ({ variation, nbrProduct }: Number) => {
export const Product: Function = ({ sitecode, visitorcode }: SiteCode) => {
    const { variationID } = KamInit(sitecode, visitorcode, 130895);
    const a = KamInit(sitecode, visitorcode, 130895);
    console.log({ a });
    let recommendedProductsNumber: number = 0;
    console.log(`PRODUCT : sitecode : ${sitecode}`);
    console.log(`PRODUCT : visitorcode : ${visitorcode}`);
    console.log(`PRODUCT : variationID : ${variationID}`);
    if (variationID === 0) {
        recommendedProductsNumber = 5;
    } else if (variationID === 571873) {
        recommendedProductsNumber = 10;
    } else if (variationID === 571874) {
        recommendedProductsNumber = 8;
    } else if (variationID === 571937) {
        recommendedProductsNumber = 2;
    }
    console.log(`PRODUCT : recommendedProductsNumber : ${recommendedProductsNumber}`);
    let { id } = useParams<{ id: string | any }>();

    if (id >= products.length) {
        return <Route component={ErrorPage} />;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center mb-5">
                    <h1>Shop Online Kam</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-lg-4 py-3">
                    <div className="card text-center mx-auto">
                        <div className="card-body">
                            <img src="https://picsum.photos/200/200?random=1" alt={products[id].name} />
                            <h5 className="card-title">{products[id].name}</h5>
                            <p className="card-text">Descriptif du produit : {products[id].description}</p>
                            <p className="card-text">Produit n° {products[id].id} </p>
                            <p className="card-text">Prix : {products[id].price}€</p>

                            <p className="card-text">
                                Quantité : <strong>{products[id].quantity}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const Product: Function = ({ variation, nbrProduct }: Number) => {
//     console.log(`PRODUCT : ID Variation : ${variation}`);
//     console.log(`PRODUCT : nombre product : ${nbrProduct}`);
//     let { id } = useParams<{ id: string | any }>();

//     if (id >= products.length) {
//         return <Route component={ErrorPage} />;
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col text-center mb-5">
//                     <h1>Shop Online Kam</h1>
//                 </div>
//             </div>
//             <div className="row justify-content-center">
//                 <div className="col col-lg-4 py-3">
//                     <div className="card text-center mx-auto">
//                         <div className="card-body">
//                             <img src="https://picsum.photos/200/200?random=1" alt={products[id].name} />
//                             <h5 className="card-title">{products[id].name}</h5>
//                             <p className="card-text">Descriptif du produit : {products[id].description}</p>
//                             <p className="card-text">Produit n° {products[id].id} </p>
//                             <p className="card-text">Prix : {products[id].price}€</p>

//                             <p className="card-text">
//                                 Quantité : <strong>{products[id].quantity}</strong>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;
