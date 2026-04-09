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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageUrl`,
                label: `[${labelPrefix}imageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}latitude`,
                label: `[${labelPrefix}latitude]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}longitude`,
                label: `[${labelPrefix}longitude]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'imageUrl': bundle.inputData?.[`${keyPrefix}imageUrl`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'latitude': bundle.inputData?.[`${keyPrefix}latitude`],
            'longitude': bundle.inputData?.[`${keyPrefix}longitude`],
        }
    },
}
