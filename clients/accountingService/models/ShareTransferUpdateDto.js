const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}newShareHolderId`,
                label: `[${labelPrefix}newShareHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}formerShareHolderId`,
                label: `[${labelPrefix}formerShareHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shareTransferReasonId`,
                label: `[${labelPrefix}shareTransferReasonId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
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
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'newShareHolderId': bundle.inputData?.[`${keyPrefix}newShareHolderId`],
            'formerShareHolderId': bundle.inputData?.[`${keyPrefix}formerShareHolderId`],
            'shareTransferReasonId': bundle.inputData?.[`${keyPrefix}shareTransferReasonId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
