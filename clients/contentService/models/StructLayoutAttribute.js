const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ....fields(`${keyPrefix}typeId`, isInput),
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'string',
                choices: [
                    'Sequential',
                    'Explicit',
                    'Auto',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'typeId': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}typeId`)),
            'value': bundle.inputData?.[`${keyPrefix}value`],
        }
    },
}
