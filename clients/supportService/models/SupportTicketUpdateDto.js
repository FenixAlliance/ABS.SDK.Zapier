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
                key: `${keyPrefix}contactID`,
                label: `[${labelPrefix}contactID]`,
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
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'contactID': bundle.inputData?.[`${keyPrefix}contactID`],
            'supportTicketTypeID': bundle.inputData?.[`${keyPrefix}supportTicketTypeID`],
            'supportEntitlementID': bundle.inputData?.[`${keyPrefix}supportEntitlementID`],
            'supportPriorityID': bundle.inputData?.[`${keyPrefix}supportPriorityID`],
        }
    },
}
