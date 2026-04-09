const utils = require('../utils/utils');
const AzureAppInsightIntegrationOptions = require('../models/AzureAppInsightIntegrationOptions');
const AzureStorageIntegrationOptions = require('../models/AzureStorageIntegrationOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            ...AzureAppInsightIntegrationOptions.fields(`${keyPrefix}azureAppInsight`, isInput),
            ...AzureStorageIntegrationOptions.fields(`${keyPrefix}azureStorage`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'azureAppInsight': utils.removeIfEmpty(AzureAppInsightIntegrationOptions.mapping(bundle, `${keyPrefix}azureAppInsight`)),
            'azureStorage': utils.removeIfEmpty(AzureStorageIntegrationOptions.mapping(bundle, `${keyPrefix}azureStorage`)),
        }
    },
}
