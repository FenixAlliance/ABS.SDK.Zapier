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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
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
                key: `${keyPrefix}previousValue`,
                label: `[${labelPrefix}previousValue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}newValue`,
                label: `[${labelPrefix}newValue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}amendmentAmount`,
                label: `[${labelPrefix}amendmentAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amendmentDate`,
                label: `[${labelPrefix}amendmentDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetName': bundle.inputData?.[`${keyPrefix}assetName`],
            'previousValue': bundle.inputData?.[`${keyPrefix}previousValue`],
            'newValue': bundle.inputData?.[`${keyPrefix}newValue`],
            'amendmentAmount': bundle.inputData?.[`${keyPrefix}amendmentAmount`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'amendmentDate': bundle.inputData?.[`${keyPrefix}amendmentDate`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
        }
    },
}
