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
                key: `${keyPrefix}ip`,
                label: `[${labelPrefix}ip]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}total`,
                label: `[${labelPrefix}total]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxes`,
                label: `[${labelPrefix}taxes]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}freight`,
                label: `[${labelPrefix}freight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}subTotal`,
                label: `[${labelPrefix}subTotal]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemCartRecordsCount`,
                label: `[${labelPrefix}itemCartRecordsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}itemToCompareRecordsCount`,
                label: `[${labelPrefix}itemToCompareRecordsCount]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'ip': bundle.inputData?.[`${keyPrefix}ip`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'total': bundle.inputData?.[`${keyPrefix}total`],
            'taxes': bundle.inputData?.[`${keyPrefix}taxes`],
            'freight': bundle.inputData?.[`${keyPrefix}freight`],
            'subTotal': bundle.inputData?.[`${keyPrefix}subTotal`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'itemCartRecordsCount': bundle.inputData?.[`${keyPrefix}itemCartRecordsCount`],
            'itemToCompareRecordsCount': bundle.inputData?.[`${keyPrefix}itemToCompareRecordsCount`],
        }
    },
}
