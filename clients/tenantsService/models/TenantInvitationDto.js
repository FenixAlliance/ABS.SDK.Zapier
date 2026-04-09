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
                key: `${keyPrefix}revoked`,
                label: `[${labelPrefix}revoked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}redeemed`,
                label: `[${labelPrefix}redeemed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}redeemedTimestamp`,
                label: `[${labelPrefix}redeemedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userEmail`,
                label: `[${labelPrefix}userEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creatorEnrollmentId`,
                label: `[${labelPrefix}creatorEnrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}relatedEnrollmentId`,
                label: `[${labelPrefix}relatedEnrollmentId]`,
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
            'revoked': bundle.inputData?.[`${keyPrefix}revoked`],
            'redeemed': bundle.inputData?.[`${keyPrefix}redeemed`],
            'redeemedTimestamp': bundle.inputData?.[`${keyPrefix}redeemedTimestamp`],
            'userEmail': bundle.inputData?.[`${keyPrefix}userEmail`],
            'creatorEnrollmentId': bundle.inputData?.[`${keyPrefix}creatorEnrollmentId`],
            'relatedEnrollmentId': bundle.inputData?.[`${keyPrefix}relatedEnrollmentId`],
        }
    },
}
