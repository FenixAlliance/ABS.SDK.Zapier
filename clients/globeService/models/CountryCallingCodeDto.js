const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}callingCode`,
                label: `[${labelPrefix}callingCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryID`,
                label: `[${labelPrefix}countryID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'callingCode': bundle.inputData?.[`${keyPrefix}callingCode`],
            'countryID': bundle.inputData?.[`${keyPrefix}countryID`],
        }
    },
}
