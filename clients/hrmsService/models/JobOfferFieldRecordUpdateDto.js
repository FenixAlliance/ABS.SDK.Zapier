const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}jobFieldId`,
                label: `[${labelPrefix}jobFieldId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobOfferId`,
                label: `[${labelPrefix}jobOfferId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'jobFieldId': bundle.inputData?.[`${keyPrefix}jobFieldId`],
            'jobOfferId': bundle.inputData?.[`${keyPrefix}jobOfferId`],
        }
    },
}
