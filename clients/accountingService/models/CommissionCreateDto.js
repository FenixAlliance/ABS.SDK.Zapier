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
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}baseAmount`,
                label: `[${labelPrefix}baseAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}addedPercent`,
                label: `[${labelPrefix}addedPercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}addedAmount`,
                label: `[${labelPrefix}addedAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxComission`,
                label: `[${labelPrefix}taxComission]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}salaryId`,
                label: `[${labelPrefix}salaryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}emisorWalletAccountId`,
                label: `[${labelPrefix}emisorWalletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverWalletAccountId`,
                label: `[${labelPrefix}receiverWalletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}emisorContactId`,
                label: `[${labelPrefix}emisorContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverContactId`,
                label: `[${labelPrefix}receiverContactId]`,
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
            'baseAmount': bundle.inputData?.[`${keyPrefix}baseAmount`],
            'addedPercent': bundle.inputData?.[`${keyPrefix}addedPercent`],
            'addedAmount': bundle.inputData?.[`${keyPrefix}addedAmount`],
            'taxComission': bundle.inputData?.[`${keyPrefix}taxComission`],
            'salaryId': bundle.inputData?.[`${keyPrefix}salaryId`],
            'emisorWalletAccountId': bundle.inputData?.[`${keyPrefix}emisorWalletAccountId`],
            'receiverWalletAccountId': bundle.inputData?.[`${keyPrefix}receiverWalletAccountId`],
            'emisorContactId': bundle.inputData?.[`${keyPrefix}emisorContactId`],
            'receiverContactId': bundle.inputData?.[`${keyPrefix}receiverContactId`],
        }
    },
}
