const utils = require('../utils/utils');
const AllianceBusinessSuiteIntegrationOptions = require('../models/AllianceBusinessSuiteIntegrationOptions');
const InfinityComexIntegrationOptions = require('../models/InfinityComexIntegrationOptions');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            ...InfinityComexIntegrationOptions.fields(`${keyPrefix}icx`, isInput),
            ...AllianceBusinessSuiteIntegrationOptions.fields(`${keyPrefix}abs`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'icx': utils.removeIfEmpty(InfinityComexIntegrationOptions.mapping(bundle, `${keyPrefix}icx`)),
            'abs': utils.removeIfEmpty(AllianceBusinessSuiteIntegrationOptions.mapping(bundle, `${keyPrefix}abs`)),
        }
    },
}
