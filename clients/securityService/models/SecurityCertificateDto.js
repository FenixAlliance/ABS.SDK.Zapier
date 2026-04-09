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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expirePeriod`,
                label: `[${labelPrefix}expirePeriod]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expired`,
                label: `[${labelPrefix}expired]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}csr`,
                label: `[${labelPrefix}csr]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'expirePeriod': bundle.inputData?.[`${keyPrefix}expirePeriod`],
            'expired': bundle.inputData?.[`${keyPrefix}expired`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'csr': bundle.inputData?.[`${keyPrefix}csr`],
        }
    },
}
