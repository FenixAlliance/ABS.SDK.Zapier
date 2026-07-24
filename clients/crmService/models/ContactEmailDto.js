const utils = require('../utils/utils');
const ContactDto = require('../models/ContactDto');

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
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
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
                key: `${keyPrefix}address`,
                label: `[${labelPrefix}address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isPrimary`,
                label: `[${labelPrefix}isPrimary]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isVerified`,
                label: `[${labelPrefix}isVerified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}verifiedTimestamp`,
                label: `[${labelPrefix}verifiedTimestamp]`,
                type: 'string',
            },
            ...ContactDto.fields(`${keyPrefix}contact`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'isPrimary': bundle.inputData?.[`${keyPrefix}isPrimary`],
            'isVerified': bundle.inputData?.[`${keyPrefix}isVerified`],
            'verifiedTimestamp': bundle.inputData?.[`${keyPrefix}verifiedTimestamp`],
            'contact': utils.removeIfEmpty(ContactDto.mapping(bundle, `${keyPrefix}contact`)),
        }
    },
}
