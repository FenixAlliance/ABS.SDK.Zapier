const utils = require('../utils/utils');
const ColorScheme = require('../models/ColorScheme');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}primarySkin`,
                label: `[${labelPrefix}primarySkin]`,
                type: 'string',
                choices: [
                    'Dark',
                    'Light',
                ],
            },
            {
                key: `${keyPrefix}primaryColor`,
                label: `[${labelPrefix}primaryColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}secondaryColor`,
                label: `[${labelPrefix}secondaryColor]`,
                type: 'string',
            },
            ...ColorScheme.fields(`${keyPrefix}colorScheme`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'primarySkin': bundle.inputData?.[`${keyPrefix}primarySkin`],
            'primaryColor': bundle.inputData?.[`${keyPrefix}primaryColor`],
            'secondaryColor': bundle.inputData?.[`${keyPrefix}secondaryColor`],
            'colorScheme': utils.removeIfEmpty(ColorScheme.mapping(bundle, `${keyPrefix}colorScheme`)),
        }
    },
}
