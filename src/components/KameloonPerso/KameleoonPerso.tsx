//import { KameleoonClient, KameleoonData, KameleoonException } from 'kameleoon-client-javascript';
let { KameleoonClient, KameleoonException } = require('kameleoon-client-javascript');

export const KamExpe: Function = async () => {
    console.log('TOTO');
    const value = await new Promise<number>((resolse, reject) => {
        let siteCode = 'y5ofsuw2jj';
        let kameleoonClient = new KameleoonClient(siteCode, false, {
            actions_configuration_refresh_interval: 5,
        });
        let visitorCode = kameleoonClient.obtainVisitorCode('http://localhost:3000');
        let recommendedProductsNumber = 5;
        console.log('kameleoon ===>', kameleoonClient.configurations.experiments);
        console.log('VisitorCode ===> ', visitorCode);
        kameleoonClient.runWhenReady(
            function () {
                let variationID;
                try {
                    variationID = kameleoonClient.triggerExperiment(visitorCode, 130895);
                    console.log('variationID ===> ', variationID);
                } catch (e: any) {
                    console.log('E', e.type);
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
                if (variationID === 0) {
                    recommendedProductsNumber = 5;
                } else if (variationID === 571873) {
                    recommendedProductsNumber = 10;
                } else if (variationID === 571874) {
                    recommendedProductsNumber = 8;
                } else if (variationID === 571937) {
                    recommendedProductsNumber = 2;
                }
                return resolse(recommendedProductsNumber);
            },
            function () {
                console.log('Timeout occured in the JavaScript SDK initialization.');
            },
            2000
        );
    });
    console.log('resolved', value);
    return value;
};

// export default KamExpe;
//export default Test;
