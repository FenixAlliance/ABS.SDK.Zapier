const utils = require('../utils/utils');
const MicrosoftAzureIntegrationOptions = require('../models/MicrosoftAzureIntegrationOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            ...MicrosoftAzureIntegrationOptions.fields(`${keyPrefix}azure`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'azure': utils.removeIfEmpty(MicrosoftAzureIntegrationOptions.mapping(bundle, `${keyPrefix}azure`)),
        }
    },
}
