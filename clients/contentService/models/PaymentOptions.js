const utils = require('../utils/utils');
const PaymentMethod = require('../models/PaymentMethod');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}paymentMethods`,
                label: `[${labelPrefix}paymentMethods]`,
                children: PaymentMethod.fields(`${keyPrefix}paymentMethods${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'paymentMethods': utils.childMapping(bundle.inputData?.[`${keyPrefix}paymentMethods`], `${keyPrefix}paymentMethods`, PaymentMethod),
        }
    },
}
