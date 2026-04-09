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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approved`,
                label: `[${labelPrefix}approved]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}approvedTimestamp`,
                label: `[${labelPrefix}approvedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportEntitlementID`,
                label: `[${labelPrefix}supportEntitlementID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactID`,
                label: `[${labelPrefix}contactID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountHolderID`,
                label: `[${labelPrefix}accountHolderID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'approved': bundle.inputData?.[`${keyPrefix}approved`],
            'approvedTimestamp': bundle.inputData?.[`${keyPrefix}approvedTimestamp`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'supportEntitlementID': bundle.inputData?.[`${keyPrefix}supportEntitlementID`],
            'contactID': bundle.inputData?.[`${keyPrefix}contactID`],
            'accountHolderID': bundle.inputData?.[`${keyPrefix}accountHolderID`],
        }
    },
}
