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
                key: `${keyPrefix}dateTime`,
                label: `[${labelPrefix}dateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentJournalId`,
                label: `[${labelPrefix}parentJournalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalTypeId`,
                label: `[${labelPrefix}journalTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ledgerId`,
                label: `[${labelPrefix}ledgerId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'dateTime': bundle.inputData?.[`${keyPrefix}dateTime`],
            'parentJournalId': bundle.inputData?.[`${keyPrefix}parentJournalId`],
            'journalTypeId': bundle.inputData?.[`${keyPrefix}journalTypeId`],
            'ledgerId': bundle.inputData?.[`${keyPrefix}ledgerId`],
        }
    },
}
