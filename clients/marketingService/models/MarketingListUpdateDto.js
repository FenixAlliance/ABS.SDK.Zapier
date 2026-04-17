const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}locked`,
                label: `[${labelPrefix}locked]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purpose`,
                label: `[${labelPrefix}purpose]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}source`,
                label: `[${labelPrefix}source]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost`,
                label: `[${labelPrefix}cost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}modifiedOn`,
                label: `[${labelPrefix}modifiedOn]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastUsedOn`,
                label: `[${labelPrefix}lastUsedOn]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marketingListType`,
                label: `[${labelPrefix}marketingListType]`,
                type: 'string',
                choices: [
                    'Static',
                    'Dynamic',
                ],
            },
            {
                key: `${keyPrefix}marketingListTarget`,
                label: `[${labelPrefix}marketingListTarget]`,
                type: 'string',
                choices: [
                    'Individual',
                    'Organization',
                    'Lead',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'locked': bundle.inputData?.[`${keyPrefix}locked`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'purpose': bundle.inputData?.[`${keyPrefix}purpose`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'source': bundle.inputData?.[`${keyPrefix}source`],
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'modifiedOn': bundle.inputData?.[`${keyPrefix}modifiedOn`],
            'lastUsedOn': bundle.inputData?.[`${keyPrefix}lastUsedOn`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'marketingListType': bundle.inputData?.[`${keyPrefix}marketingListType`],
            'marketingListTarget': bundle.inputData?.[`${keyPrefix}marketingListTarget`],
        }
    },
}
