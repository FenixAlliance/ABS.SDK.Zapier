const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}maxMindLicenseKey`,
                label: `[${labelPrefix}maxMindLicenseKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}maxMindDbPath`,
                label: `[${labelPrefix}maxMindDbPath]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'maxMindLicenseKey': bundle.inputData?.[`${keyPrefix}maxMindLicenseKey`],
            'maxMindDbPath': bundle.inputData?.[`${keyPrefix}maxMindDbPath`],
        }
    },
}
