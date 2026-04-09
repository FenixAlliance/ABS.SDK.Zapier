const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}serialList`,
                label: `[${labelPrefix}serialList]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serial`,
                label: `[${labelPrefix}serial]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationLocationId`,
                label: `[${labelPrefix}destinationLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationContactId`,
                label: `[${labelPrefix}destinationContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationDepartmentId`,
                label: `[${labelPrefix}destinationDepartmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'serialList': bundle.inputData?.[`${keyPrefix}serialList`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'serial': bundle.inputData?.[`${keyPrefix}serial`],
            'destinationLocationId': bundle.inputData?.[`${keyPrefix}destinationLocationId`],
            'destinationContactId': bundle.inputData?.[`${keyPrefix}destinationContactId`],
            'destinationDepartmentId': bundle.inputData?.[`${keyPrefix}destinationDepartmentId`],
        }
    },
}
