const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportTicketStatus`,
                label: `[${labelPrefix}supportTicketStatus]`,
                type: 'string',
                choices: [
                    'New',
                    'OpenAndWaitingForAgent',
                    'OpenAndWaitingForCustomer',
                    'Closed',
                ],
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportTicketTypeId`,
                label: `[${labelPrefix}supportTicketTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportEntitlementId`,
                label: `[${labelPrefix}supportEntitlementId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportPriorityId`,
                label: `[${labelPrefix}supportPriorityId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'supportTicketStatus': bundle.inputData?.[`${keyPrefix}supportTicketStatus`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'supportTicketTypeId': bundle.inputData?.[`${keyPrefix}supportTicketTypeId`],
            'supportEntitlementId': bundle.inputData?.[`${keyPrefix}supportEntitlementId`],
            'supportPriorityId': bundle.inputData?.[`${keyPrefix}supportPriorityId`],
        }
    },
}
