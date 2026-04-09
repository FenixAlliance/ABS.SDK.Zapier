const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableCoupons`,
                label: `[${labelPrefix}enableCoupons]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}calculateCouponsSecuentially`,
                label: `[${labelPrefix}calculateCouponsSecuentially]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableCoupons': bundle.inputData?.[`${keyPrefix}enableCoupons`],
            'calculateCouponsSecuentially': bundle.inputData?.[`${keyPrefix}calculateCouponsSecuentially`],
        }
    },
}
