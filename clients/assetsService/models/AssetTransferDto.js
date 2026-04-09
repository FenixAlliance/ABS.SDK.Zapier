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
                key: `${keyPrefix}businessId`,
                label: `[${labelPrefix}businessId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordId`,
                label: `[${labelPrefix}businessProfileRecordId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetName`,
                label: `[${labelPrefix}assetName]`,
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
                key: `${keyPrefix}sourceLocationName`,
                label: `[${labelPrefix}sourceLocationName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationLocationId`,
                label: `[${labelPrefix}destinationLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationLocationName`,
                label: `[${labelPrefix}destinationLocationName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceContactId`,
                label: `[${labelPrefix}sourceContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceContactName`,
                label: `[${labelPrefix}sourceContactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationContactId`,
                label: `[${labelPrefix}destinationContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationContactName`,
                label: `[${labelPrefix}destinationContactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDepartmentId`,
                label: `[${labelPrefix}sourceDepartmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDepartmentName`,
                label: `[${labelPrefix}sourceDepartmentName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationDepartmentId`,
                label: `[${labelPrefix}destinationDepartmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationDepartmentName`,
                label: `[${labelPrefix}destinationDepartmentName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'businessId': bundle.inputData?.[`${keyPrefix}businessId`],
            'businessProfileRecordId': bundle.inputData?.[`${keyPrefix}businessProfileRecordId`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetName': bundle.inputData?.[`${keyPrefix}assetName`],
            'isRootTransfer': bundle.inputData?.[`${keyPrefix}isRootTransfer`],
            'serialList': bundle.inputData?.[`${keyPrefix}serialList`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'serial': bundle.inputData?.[`${keyPrefix}serial`],
            'previousAssetTransferId': bundle.inputData?.[`${keyPrefix}previousAssetTransferId`],
            'sourceLocationId': bundle.inputData?.[`${keyPrefix}sourceLocationId`],
            'sourceLocationName': bundle.inputData?.[`${keyPrefix}sourceLocationName`],
            'destinationLocationId': bundle.inputData?.[`${keyPrefix}destinationLocationId`],
            'destinationLocationName': bundle.inputData?.[`${keyPrefix}destinationLocationName`],
            'sourceContactId': bundle.inputData?.[`${keyPrefix}sourceContactId`],
            'sourceContactName': bundle.inputData?.[`${keyPrefix}sourceContactName`],
            'destinationContactId': bundle.inputData?.[`${keyPrefix}destinationContactId`],
            'destinationContactName': bundle.inputData?.[`${keyPrefix}destinationContactName`],
            'sourceDepartmentId': bundle.inputData?.[`${keyPrefix}sourceDepartmentId`],
            'sourceDepartmentName': bundle.inputData?.[`${keyPrefix}sourceDepartmentName`],
            'destinationDepartmentId': bundle.inputData?.[`${keyPrefix}destinationDepartmentId`],
            'destinationDepartmentName': bundle.inputData?.[`${keyPrefix}destinationDepartmentName`],
        }
    },
}
