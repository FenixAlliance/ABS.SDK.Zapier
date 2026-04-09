const utils = require('../utils/utils');
const EPaycoIntegrationOptions = require('../models/EPaycoIntegrationOptions');
const FacebookIntegrationOptions = require('../models/FacebookIntegrationOptions');
const FenixAllianceIntegrationsOptions = require('../models/FenixAllianceIntegrationsOptions');
const FreeGeoIPIntegrationOptions = require('../models/FreeGeoIPIntegrationOptions');
const GoogleIntegrationOptions = require('../models/GoogleIntegrationOptions');
const MicrosoftIntegrationsOptions = require('../models/MicrosoftIntegrationsOptions');
const OpenExchangeRatesIntegrationsOptions = require('../models/OpenExchangeRatesIntegrationsOptions');
const SendgridIntegrationsOptions = require('../models/SendgridIntegrationsOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            ...EPaycoIntegrationOptions.fields(`${keyPrefix}ePayco`, isInput),
            ...GoogleIntegrationOptions.fields(`${keyPrefix}google`, isInput),
            ...FacebookIntegrationOptions.fields(`${keyPrefix}facebook`, isInput),
            ...SendgridIntegrationsOptions.fields(`${keyPrefix}sendgrid`, isInput),
            ...FreeGeoIPIntegrationOptions.fields(`${keyPrefix}freeGeoIP`, isInput),
            ...MicrosoftIntegrationsOptions.fields(`${keyPrefix}microsoft`, isInput),
            ...FenixAllianceIntegrationsOptions.fields(`${keyPrefix}fenixAlliance`, isInput),
            ...OpenExchangeRatesIntegrationsOptions.fields(`${keyPrefix}openExchangeRates`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'ePayco': utils.removeIfEmpty(EPaycoIntegrationOptions.mapping(bundle, `${keyPrefix}ePayco`)),
            'google': utils.removeIfEmpty(GoogleIntegrationOptions.mapping(bundle, `${keyPrefix}google`)),
            'facebook': utils.removeIfEmpty(FacebookIntegrationOptions.mapping(bundle, `${keyPrefix}facebook`)),
            'sendgrid': utils.removeIfEmpty(SendgridIntegrationsOptions.mapping(bundle, `${keyPrefix}sendgrid`)),
            'freeGeoIP': utils.removeIfEmpty(FreeGeoIPIntegrationOptions.mapping(bundle, `${keyPrefix}freeGeoIP`)),
            'microsoft': utils.removeIfEmpty(MicrosoftIntegrationsOptions.mapping(bundle, `${keyPrefix}microsoft`)),
            'fenixAlliance': utils.removeIfEmpty(FenixAllianceIntegrationsOptions.mapping(bundle, `${keyPrefix}fenixAlliance`)),
            'openExchangeRates': utils.removeIfEmpty(OpenExchangeRatesIntegrationsOptions.mapping(bundle, `${keyPrefix}openExchangeRates`)),
        }
    },
}
