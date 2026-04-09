const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}periodStartDate`,
                label: `[${labelPrefix}periodStartDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}periodEndDate`,
                label: `[${labelPrefix}periodEndDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'periodStartDate': bundle.inputData?.[`${keyPrefix}periodStartDate`],
            'periodEndDate': bundle.inputData?.[`${keyPrefix}periodEndDate`],
        }
    },
}
