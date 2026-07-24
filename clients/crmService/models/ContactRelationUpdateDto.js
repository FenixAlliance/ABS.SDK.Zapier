const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}relatedContactId`,
                label: `[${labelPrefix}relatedContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactRelationTypeId`,
                label: `[${labelPrefix}contactRelationTypeId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'relatedContactId': bundle.inputData?.[`${keyPrefix}relatedContactId`],
            'contactRelationTypeId': bundle.inputData?.[`${keyPrefix}contactRelationTypeId`],
        }
    },
}
