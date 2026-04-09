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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountHolderID`,
                label: `[${labelPrefix}accountHolderID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactID`,
                label: `[${labelPrefix}contactID]`,
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
                key: `${keyPrefix}supportTicketTypeID`,
                label: `[${labelPrefix}supportTicketTypeID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportEntitlementID`,
                label: `[${labelPrefix}supportEntitlementID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportPriorityID`,
                label: `[${labelPrefix}supportPriorityID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'accountHolderID': bundle.inputData?.[`${keyPrefix}accountHolderID`],
            'contactID': bundle.inputData?.[`${keyPrefix}contactID`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'supportTicketTypeID': bundle.inputData?.[`${keyPrefix}supportTicketTypeID`],
            'supportEntitlementID': bundle.inputData?.[`${keyPrefix}supportEntitlementID`],
            'supportPriorityID': bundle.inputData?.[`${keyPrefix}supportPriorityID`],
        }
    },
}
