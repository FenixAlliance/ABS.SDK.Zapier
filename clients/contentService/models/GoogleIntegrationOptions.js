const utils = require('../utils/utils');
const GoogleAnalytics = require('../models/GoogleAnalytics');
const GoogleMapsIntegrationOptions = require('../models/GoogleMapsIntegrationOptions');
const GoogleMerchantCenterIntegrationOptions = require('../models/GoogleMerchantCenterIntegrationOptions');
const GoogleMyBusinessIntegrationOptions = require('../models/GoogleMyBusinessIntegrationOptions');
const GoogleRecaptchaIntegrationOptions = require('../models/GoogleRecaptchaIntegrationOptions');
const GoogleTagManagerIntegrationOptions = require('../models/GoogleTagManagerIntegrationOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            ...GoogleMapsIntegrationOptions.fields(`${keyPrefix}googleMaps`, isInput),
            ...GoogleMerchantCenterIntegrationOptions.fields(`${keyPrefix}googleMerchantCenter`, isInput),
            ...GoogleTagManagerIntegrationOptions.fields(`${keyPrefix}googleTagManager`, isInput),
            ...GoogleRecaptchaIntegrationOptions.fields(`${keyPrefix}googleRecaptcha`, isInput),
            ...GoogleAnalytics.fields(`${keyPrefix}googleAnalytics`, isInput),
            ...GoogleMyBusinessIntegrationOptions.fields(`${keyPrefix}googleMyBusiness`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'googleMaps': utils.removeIfEmpty(GoogleMapsIntegrationOptions.mapping(bundle, `${keyPrefix}googleMaps`)),
            'googleMerchantCenter': utils.removeIfEmpty(GoogleMerchantCenterIntegrationOptions.mapping(bundle, `${keyPrefix}googleMerchantCenter`)),
            'googleTagManager': utils.removeIfEmpty(GoogleTagManagerIntegrationOptions.mapping(bundle, `${keyPrefix}googleTagManager`)),
            'googleRecaptcha': utils.removeIfEmpty(GoogleRecaptchaIntegrationOptions.mapping(bundle, `${keyPrefix}googleRecaptcha`)),
            'googleAnalytics': utils.removeIfEmpty(GoogleAnalytics.mapping(bundle, `${keyPrefix}googleAnalytics`)),
            'googleMyBusiness': utils.removeIfEmpty(GoogleMyBusinessIntegrationOptions.mapping(bundle, `${keyPrefix}googleMyBusiness`)),
        }
    },
}
