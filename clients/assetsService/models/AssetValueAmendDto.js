const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                dict: true,
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessId`,
                label: `[${labelPrefix}businessId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}businessProfileRecordId`,
                label: `[${labelPrefix}businessProfileRecordId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                dict: true,
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
                key: `${keyPrefix}approvedBy`,
                label: `[${labelPrefix}approvedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approvalDate`,
                label: `[${labelPrefix}approvalDate]`,
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
            'previousValue': bundle.inputData?.[`${keyPrefix}previousValue`],
            'newValue': bundle.inputData?.[`${keyPrefix}newValue`],
            'amendmentAmount': bundle.inputData?.[`${keyPrefix}amendmentAmount`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'amendmentDate': bundle.inputData?.[`${keyPrefix}amendmentDate`],
            'approvedBy': bundle.inputData?.[`${keyPrefix}approvedBy`],
            'approvalDate': bundle.inputData?.[`${keyPrefix}approvalDate`],
        }
    },
}
