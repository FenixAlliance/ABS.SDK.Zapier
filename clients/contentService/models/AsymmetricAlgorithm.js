const utils = require('../utils/utils');
const KeySizes = require('../models/KeySizes');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}keySize`,
                label: `[${labelPrefix}keySize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}legalKeySizes`,
                label: `[${labelPrefix}legalKeySizes]`,
                children: KeySizes.fields(`${keyPrefix}legalKeySizes${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}signatureAlgorithm`,
                label: `[${labelPrefix}signatureAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}keyExchangeAlgorithm`,
                label: `[${labelPrefix}keyExchangeAlgorithm]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'keySize': bundle.inputData?.[`${keyPrefix}keySize`],
            'legalKeySizes': utils.childMapping(bundle.inputData?.[`${keyPrefix}legalKeySizes`], `${keyPrefix}legalKeySizes`, KeySizes),
            'signatureAlgorithm': bundle.inputData?.[`${keyPrefix}signatureAlgorithm`],
            'keyExchangeAlgorithm': bundle.inputData?.[`${keyPrefix}keyExchangeAlgorithm`],
        }
    },
}
