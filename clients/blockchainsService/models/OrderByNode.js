const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}direction`,
                label: `[${labelPrefix}direction]`,
                type: 'string',
                choices: [
                    'Ascending',
                    'Descending',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
        }
    },
}
