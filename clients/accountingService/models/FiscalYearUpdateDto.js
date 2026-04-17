const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}closed`,
                label: `[${labelPrefix}closed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalAuthorityId`,
                label: `[${labelPrefix}fiscalAuthorityId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'closed': bundle.inputData?.[`${keyPrefix}closed`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'fiscalAuthorityId': bundle.inputData?.[`${keyPrefix}fiscalAuthorityId`],
        }
    },
}
