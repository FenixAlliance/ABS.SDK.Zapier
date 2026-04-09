const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}domain`,
                label: `[${labelPrefix}domain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}txtRecord`,
                label: `[${labelPrefix}txtRecord]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'domain': bundle.inputData?.[`${keyPrefix}domain`],
            'txtRecord': bundle.inputData?.[`${keyPrefix}txtRecord`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
        }
    },
}
