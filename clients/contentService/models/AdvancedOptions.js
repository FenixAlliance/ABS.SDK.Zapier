const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}homePageID`,
                label: `[${labelPrefix}homePageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cartPageID`,
                label: `[${labelPrefix}cartPageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}checkoutPageID`,
                label: `[${labelPrefix}checkoutPageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privacyPolicyPageID`,
                label: `[${labelPrefix}privacyPolicyPageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerAccountPageID`,
                label: `[${labelPrefix}customerAccountPageID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}termsAndConditionsPageID`,
                label: `[${labelPrefix}termsAndConditionsPageID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'homePageID': bundle.inputData?.[`${keyPrefix}homePageID`],
            'cartPageID': bundle.inputData?.[`${keyPrefix}cartPageID`],
            'checkoutPageID': bundle.inputData?.[`${keyPrefix}checkoutPageID`],
            'privacyPolicyPageID': bundle.inputData?.[`${keyPrefix}privacyPolicyPageID`],
            'customerAccountPageID': bundle.inputData?.[`${keyPrefix}customerAccountPageID`],
            'termsAndConditionsPageID': bundle.inputData?.[`${keyPrefix}termsAndConditionsPageID`],
        }
    },
}
