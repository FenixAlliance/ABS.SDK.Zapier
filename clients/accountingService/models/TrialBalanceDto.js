const utils = require('../utils/utils');
const TrialBalanceRowDto = require('../models/TrialBalanceRowDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}fiscalPeriodId`,
                label: `[${labelPrefix}fiscalPeriodId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}financialBookId`,
                label: `[${labelPrefix}financialBookId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rows`,
                label: `[${labelPrefix}rows]`,
                children: TrialBalanceRowDto.fields(`${keyPrefix}rows${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}totalDebit`,
                label: `[${labelPrefix}totalDebit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalCredit`,
                label: `[${labelPrefix}totalCredit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}isBalanced`,
                label: `[${labelPrefix}isBalanced]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fiscalPeriodId': bundle.inputData?.[`${keyPrefix}fiscalPeriodId`],
            'financialBookId': bundle.inputData?.[`${keyPrefix}financialBookId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'rows': utils.childMapping(bundle.inputData?.[`${keyPrefix}rows`], `${keyPrefix}rows`, TrialBalanceRowDto),
            'totalDebit': bundle.inputData?.[`${keyPrefix}totalDebit`],
            'totalCredit': bundle.inputData?.[`${keyPrefix}totalCredit`],
            'isBalanced': bundle.inputData?.[`${keyPrefix}isBalanced`],
        }
    },
}
