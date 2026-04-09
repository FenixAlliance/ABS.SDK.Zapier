const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}baseUnitAmount`,
                label: `[${labelPrefix}baseUnitAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}baseUnitId`,
                label: `[${labelPrefix}baseUnitId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'baseUnitAmount': bundle.inputData?.[`${keyPrefix}baseUnitAmount`],
            'baseUnitId': bundle.inputData?.[`${keyPrefix}baseUnitId`],
        }
    },
}
