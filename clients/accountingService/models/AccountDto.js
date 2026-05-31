const utils = require('../utils/utils');
const Money = require('../models/Money');

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
                key: `${keyPrefix}group`,
                label: `[${labelPrefix}group]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}frozen`,
                label: `[${labelPrefix}frozen]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}prefix`,
                label: `[${labelPrefix}prefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}balance`,
                label: `[${labelPrefix}balance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountType`,
                label: `[${labelPrefix}accountType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountTypeId`,
                label: `[${labelPrefix}accountTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debitsBalance`,
                label: `[${labelPrefix}debitsBalance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditsBalance`,
                label: `[${labelPrefix}creditsBalance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}balanceInUsd`,
                label: `[${labelPrefix}balanceInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}debitsBalanceInUsd`,
                label: `[${labelPrefix}debitsBalanceInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditsBalanceInUsd`,
                label: `[${labelPrefix}creditsBalanceInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}parentAccountId`,
                label: `[${labelPrefix}parentAccountId]`,
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
                key: `${keyPrefix}childrenAccountsCount`,
                label: `[${labelPrefix}childrenAccountsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}accountCategory`,
                label: `[${labelPrefix}accountCategory]`,
                type: 'string',
                choices: [
                    'Assets',
                    'Equity',
                    'Revenue',
                    'Expense',
                    'Liabilities',
                ],
            },
            ...Money.fields(`${keyPrefix}balanceAmount`, isInput),
            ...Money.fields(`${keyPrefix}creditsBalanceAmount`, isInput),
            ...Money.fields(`${keyPrefix}debitsBalanceAmount`, isInput),
            ...Money.fields(`${keyPrefix}balanceAmountInUsd`, isInput),
            ...Money.fields(`${keyPrefix}debitsBalanceAmountInUsd`, isInput),
            ...Money.fields(`${keyPrefix}creditsBalanceAmountInUsd`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'group': bundle.inputData?.[`${keyPrefix}group`],
            'frozen': bundle.inputData?.[`${keyPrefix}frozen`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'prefix': bundle.inputData?.[`${keyPrefix}prefix`],
            'balance': bundle.inputData?.[`${keyPrefix}balance`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'accountType': bundle.inputData?.[`${keyPrefix}accountType`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'accountTypeId': bundle.inputData?.[`${keyPrefix}accountTypeId`],
            'debitsBalance': bundle.inputData?.[`${keyPrefix}debitsBalance`],
            'creditsBalance': bundle.inputData?.[`${keyPrefix}creditsBalance`],
            'balanceInUsd': bundle.inputData?.[`${keyPrefix}balanceInUsd`],
            'debitsBalanceInUsd': bundle.inputData?.[`${keyPrefix}debitsBalanceInUsd`],
            'creditsBalanceInUsd': bundle.inputData?.[`${keyPrefix}creditsBalanceInUsd`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'parentAccountId': bundle.inputData?.[`${keyPrefix}parentAccountId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'childrenAccountsCount': bundle.inputData?.[`${keyPrefix}childrenAccountsCount`],
            'accountCategory': bundle.inputData?.[`${keyPrefix}accountCategory`],
            'balanceAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}balanceAmount`)),
            'creditsBalanceAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}creditsBalanceAmount`)),
            'debitsBalanceAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}debitsBalanceAmount`)),
            'balanceAmountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}balanceAmountInUsd`)),
            'debitsBalanceAmountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}debitsBalanceAmountInUsd`)),
            'creditsBalanceAmountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}creditsBalanceAmountInUsd`)),
        }
    },
}
