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
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}relatedContactId`,
                label: `[${labelPrefix}relatedContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}relatedContactName`,
                label: `[${labelPrefix}relatedContactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactRelationTypeId`,
                label: `[${labelPrefix}contactRelationTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactRelationTypeName`,
                label: `[${labelPrefix}contactRelationTypeName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'relatedContactId': bundle.inputData?.[`${keyPrefix}relatedContactId`],
            'relatedContactName': bundle.inputData?.[`${keyPrefix}relatedContactName`],
            'contactRelationTypeId': bundle.inputData?.[`${keyPrefix}contactRelationTypeId`],
            'contactRelationTypeName': bundle.inputData?.[`${keyPrefix}contactRelationTypeName`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
