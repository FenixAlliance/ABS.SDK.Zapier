const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}maskFileNames`,
                label: `[${labelPrefix}maskFileNames]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}grantAccessAfterPayment`,
                label: `[${labelPrefix}grantAccessAfterPayment]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}downloadsRequireLogin`,
                label: `[${labelPrefix}downloadsRequireLogin]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'maskFileNames': bundle.inputData?.[`${keyPrefix}maskFileNames`],
            'grantAccessAfterPayment': bundle.inputData?.[`${keyPrefix}grantAccessAfterPayment`],
            'downloadsRequireLogin': bundle.inputData?.[`${keyPrefix}downloadsRequireLogin`],
        }
    },
}
