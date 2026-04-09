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
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}modifiedDate`,
                label: `[${labelPrefix}modifiedDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expirationDate`,
                label: `[${labelPrefix}expirationDate]`,
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
                key: `${keyPrefix}salesLiteratureTypeId`,
                label: `[${labelPrefix}salesLiteratureTypeId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'modifiedDate': bundle.inputData?.[`${keyPrefix}modifiedDate`],
            'expirationDate': bundle.inputData?.[`${keyPrefix}expirationDate`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'salesLiteratureTypeId': bundle.inputData?.[`${keyPrefix}salesLiteratureTypeId`],
        }
    },
}
