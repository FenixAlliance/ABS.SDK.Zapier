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
                key: `${keyPrefix}parentJournalID`,
                label: `[${labelPrefix}parentJournalID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalTypeID`,
                label: `[${labelPrefix}journalTypeID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ledgerID`,
                label: `[${labelPrefix}ledgerID]`,
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
            'parentJournalID': bundle.inputData?.[`${keyPrefix}parentJournalID`],
            'journalTypeID': bundle.inputData?.[`${keyPrefix}journalTypeID`],
            'ledgerID': bundle.inputData?.[`${keyPrefix}ledgerID`],
        }
    },
}
