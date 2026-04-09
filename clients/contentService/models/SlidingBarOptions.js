const utils = require('../utils/utils');
const Padding = require('../models/Padding');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}position`,
                label: `[${labelPrefix}position]`,
                type: 'string',
                choices: [
                    'Bottom',
                    'Right',
                    'Left',
                    'Top',
                ],
            },
            ...Padding.fields(`${keyPrefix}contentPadding`, isInput),
            {
                key: `${keyPrefix}contentAlignment`,
                label: `[${labelPrefix}contentAlignment]`,
                type: 'string',
                choices: [
                    'Center',
                    'Right',
                    'Left',
                ],
            },
            {
                key: `${keyPrefix}columnsCount`,
                label: `[${labelPrefix}columnsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableSticky`,
                label: `[${labelPrefix}enableSticky]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}openOnPageLoad`,
                label: `[${labelPrefix}openOnPageLoad]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableOnMobile`,
                label: `[${labelPrefix}enableOnMobile]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableOnDesktop`,
                label: `[${labelPrefix}enableOnDesktop]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'position': bundle.inputData?.[`${keyPrefix}position`],
            'contentPadding': utils.removeIfEmpty(Padding.mapping(bundle, `${keyPrefix}contentPadding`)),
            'contentAlignment': bundle.inputData?.[`${keyPrefix}contentAlignment`],
            'columnsCount': bundle.inputData?.[`${keyPrefix}columnsCount`],
            'enableSticky': bundle.inputData?.[`${keyPrefix}enableSticky`],
            'openOnPageLoad': bundle.inputData?.[`${keyPrefix}openOnPageLoad`],
            'enableOnMobile': bundle.inputData?.[`${keyPrefix}enableOnMobile`],
            'enableOnDesktop': bundle.inputData?.[`${keyPrefix}enableOnDesktop`],
        }
    },
}
