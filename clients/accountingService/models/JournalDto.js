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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ledgerId`,
                label: `[${labelPrefix}ledgerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalYearId`,
                label: `[${labelPrefix}fiscalYearId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalTypeId`,
                label: `[${labelPrefix}journalTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentJournalId`,
                label: `[${labelPrefix}parentJournalId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'ledgerId': bundle.inputData?.[`${keyPrefix}ledgerId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'fiscalYearId': bundle.inputData?.[`${keyPrefix}fiscalYearId`],
            'journalTypeId': bundle.inputData?.[`${keyPrefix}journalTypeId`],
            'parentJournalId': bundle.inputData?.[`${keyPrefix}parentJournalId`],
        }
    },
}
