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
                key: `${keyPrefix}justification`,
                label: `[${labelPrefix}justification]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approved`,
                label: `[${labelPrefix}approved]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}onReview`,
                label: `[${labelPrefix}onReview]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}leaveTypeId`,
                label: `[${labelPrefix}leaveTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeProfileId`,
                label: `[${labelPrefix}employeeProfileId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'justification': bundle.inputData?.[`${keyPrefix}justification`],
            'approved': bundle.inputData?.[`${keyPrefix}approved`],
            'onReview': bundle.inputData?.[`${keyPrefix}onReview`],
            'leaveTypeId': bundle.inputData?.[`${keyPrefix}leaveTypeId`],
            'employeeProfileId': bundle.inputData?.[`${keyPrefix}employeeProfileId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
