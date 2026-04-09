const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}serviceId`,
                label: `[${labelPrefix}serviceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceLevelId`,
                label: `[${labelPrefix}serviceLevelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'serviceId': bundle.inputData?.[`${keyPrefix}serviceId`],
            'serviceLevelId': bundle.inputData?.[`${keyPrefix}serviceLevelId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
        }
    },
}
