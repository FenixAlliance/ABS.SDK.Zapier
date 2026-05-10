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
                key: `${keyPrefix}abbreviation`,
                label: `[${labelPrefix}abbreviation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}weight`,
                label: `[${labelPrefix}weight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}excluded`,
                label: `[${labelPrefix}excluded]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'abbreviation': bundle.inputData?.[`${keyPrefix}abbreviation`],
            'weight': bundle.inputData?.[`${keyPrefix}weight`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'excluded': bundle.inputData?.[`${keyPrefix}excluded`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
