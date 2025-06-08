// import React from 'react';
// import { useActivateFeature } from '@kameleoon/react-sdk';
// import { FeatureFlagConfig, FeatureFlagConfigProvider } from '@thortful/thortful-react-components';
// let { KameleoonClient, KameleoonException } = require('kameleoon-client-javascript');

// /** Wrapper for providing FeatureFlagConfig from Kameleoon Feature Flags SDK */
// export function FeatureFlagWrapper({ children }: { children?: React.ReactNode }) {
//     const { hasFeature } = useActivateFeature();

//     const deliveryOptionsKey = 'ecomm-890_delivery_options';
//     let featureFlagConfig: FeatureFlagConfig;
//     try {
//         const deliveryOptionsValue = hasFeature('1', deliveryOptionsKey);

//         //Add flag values to this list
//         //const featureFlagConfig: FeatureFlagConfig = {
//         featureFlagConfig = {
//             [deliveryOptionsKey]: deliveryOptionsValue,
//         };
//     } catch (e: any) {
//         if (e.type === KameleoonException.NotTargeted) {
//             // NotTargeted
//             featureFlagConfig = 'NotTargeted';
//         }
//         if (e.type === KameleoonException.FeatureConfigurationNotFound) {
//             // ExperimentConfigurationNotFound
//             featureFlagConfig = 'ExperimentConfigurationNotFound';
//         }
//     }
//     //   const deliveryOptionsValue = hasFeature('1', deliveryOptionsKey);

//     //   //Add flag values to this list
//     //   const featureFlagConfig: FeatureFlagConfig = {
//     //     [deliveryOptionsKey]: deliveryOptionsValue,
//     //   };

//     return <FeatureFlagConfigProvider value={featureFlagConfig}>{children}</FeatureFlagConfigProvider>;
// }

// import React from 'react';
let { KameleoonClient, KameleoonException } = require('kameleoon-client-javascript');

// export const KamInit: Function = (siteCode: string, visitorCode: string) => {
export const KamInit: Function = (siteCode: string, visitorcode: string, expId: any) => {
    console.log('siteCode', siteCode);
    console.log('visitorcode', visitorcode);
    console.log('expId', expId);
    let kameleoonClient = new KameleoonClient(siteCode, false, {
        actions_configuration_refresh_interval: 5,
    });

    let variationID: number = 0;
    kameleoonClient.runWhenReady(
        function () {
            try {
                variationID = kameleoonClient.triggerExperiment(visitorcode, expId);

                console.log('variationID ===> ', variationID);
            } catch (e: any) {
                if (e.type === KameleoonException.NotTargeted.type) {
                    variationID = 0;
                }
                if (e.type === KameleoonException.NotActivated.type) {
                    variationID = 0;
                }
                if (e.type === KameleoonException.ExperimentConfigurationNotFound.type) {
                    variationID = 0;
                }
            }
            // if (variationID === 0) {
            //     recommendedProductsNumber = 5;
            // } else if (variationID === 571873) {
            //     recommendedProductsNumber = 10;
            // } else if (variationID === 571874) {
            //     recommendedProductsNumber = 8;
            // } else if (variationID === 571937) {
            //     recommendedProductsNumber = 2;
            // }
        },
        function () {
            console.log('Timeout occured in the JavaScript SDK initialization.');
        },
        2000
    );
    // return { variationID, variationIDs, recommendedProductsNumber };
    return { variationID };
};
