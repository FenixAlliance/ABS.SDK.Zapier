const utils = require('../utils/utils');
const JsonWebKey = require('../models/JsonWebKey');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}keys`,
                label: `[${labelPrefix}keys]`,
                children: JsonWebKey.fields(`${keyPrefix}keys${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'keys': utils.childMapping(bundle.inputData?.[`${keyPrefix}keys`], `${keyPrefix}keys`, JsonWebKey),
        }
    },
}
