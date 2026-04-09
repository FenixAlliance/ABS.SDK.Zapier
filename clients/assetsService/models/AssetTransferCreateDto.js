const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isRootTransfer`,
                label: `[${labelPrefix}isRootTransfer]`,
                type: 'boolean',
            },
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
                key: `${keyPrefix}previousAssetTransferId`,
                label: `[${labelPrefix}previousAssetTransferId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceLocationId`,
                label: `[${labelPrefix}sourceLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationLocationId`,
                label: `[${labelPrefix}destinationLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceContactId`,
                label: `[${labelPrefix}sourceContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationContactId`,
                label: `[${labelPrefix}destinationContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDepartmentId`,
                label: `[${labelPrefix}sourceDepartmentId]`,
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
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'isRootTransfer': bundle.inputData?.[`${keyPrefix}isRootTransfer`],
            'serialList': bundle.inputData?.[`${keyPrefix}serialList`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'serial': bundle.inputData?.[`${keyPrefix}serial`],
            'previousAssetTransferId': bundle.inputData?.[`${keyPrefix}previousAssetTransferId`],
            'sourceLocationId': bundle.inputData?.[`${keyPrefix}sourceLocationId`],
            'destinationLocationId': bundle.inputData?.[`${keyPrefix}destinationLocationId`],
            'sourceContactId': bundle.inputData?.[`${keyPrefix}sourceContactId`],
            'destinationContactId': bundle.inputData?.[`${keyPrefix}destinationContactId`],
            'sourceDepartmentId': bundle.inputData?.[`${keyPrefix}sourceDepartmentId`],
            'destinationDepartmentId': bundle.inputData?.[`${keyPrefix}destinationDepartmentId`],
        }
    },
}
