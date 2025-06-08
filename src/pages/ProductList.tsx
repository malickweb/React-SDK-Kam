import React from 'react';
import { ButtonLink } from './../components/Buttons/ButtonLink';
import { Description, Number } from '../interfaces/Interfaces';
import { KamInit } from '../components/KameloonPerso/KamInit';

import produits from '../json/Product';

interface SiteCode {
    sitecode: string;
    visitorcode: string;
}
const Products: Function = ({ nbrProduct }: Number) => {
    return produits.slice(0, nbrProduct).map((value: Description, i: number): any => {
        return (
            <div key={i} className="col col-xl-3 col-lg-4 col-sm-6 col-6 py-3">
                <div className="card text-center mx-auto">
                    <div className="card-body">
                        <img src="https://picsum.photos/200/200?random=1" alt={value.name} />
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">Descriptif du produit : {value.description}</p>
                        <p className="card-text">Produit n° {value.id} </p>
                        <p className="card-text">Prix : {value.price}€</p>

                        <p className="card-text">
                            Quantité : <strong>{value.quantity}</strong>
                        </p>
                        <ButtonLink hrefTo={'/product/' + value.id} text={`Voir le produit`} reverse={false} />
                    </div>
                </div>
            </div>
        );
    });
};

// export const ProductsList = ({ variation, nbrProduct }: Number) => {
//     const { variationID, variationIDs, recommendedProductsNumber } = KamInit(siteCode, visitorCode);
//     return (
//         <div className="container">
//             <div className="row">
//                 <h3>{variation}</h3>
//                 <Products nbrProduct={nbrProduct} />
//             </div>
//         </div>
//     );
// };

export const ProductsList = ({ sitecode, visitorcode }: SiteCode) => {
    const { variationID } = KamInit(sitecode, visitorcode, 130895);
    let recommendedProductsNumber: number = 0;
    if (variationID === 0) {
        recommendedProductsNumber = 5;
    } else if (variationID === 571873) {
        recommendedProductsNumber = 10;
    } else if (variationID === 571874) {
        recommendedProductsNumber = 8;
    } else if (variationID === 571937) {
        recommendedProductsNumber = 2;
    }
    return (
        <div className="container">
            <div className="row">
                <h3>{variationID}</h3>
                <Products nbrProduct={recommendedProductsNumber} />
            </div>
        </div>
    );
};

// export default ContainerProduct;
