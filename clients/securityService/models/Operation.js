const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}operationType`,
                label: `[${labelPrefix}operationType]`,
                type: 'string',
                choices: [
                    'Add',
                    'Remove',
                    'Replace',
                    'Move',
                    'Copy',
                    'Test',
                    'Invalid',
                ],
            },
            {
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}op`,
                label: `[${labelPrefix}op]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}from`,
                label: `[${labelPrefix}from]`,
                type: 'string',
            },
            ....fields(`${keyPrefix}value`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'operationType': bundle.inputData?.[`${keyPrefix}operationType`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'op': bundle.inputData?.[`${keyPrefix}op`],
            'from': bundle.inputData?.[`${keyPrefix}from`],
            'value': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}value`)),
        }
    },
}
