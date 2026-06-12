const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}typeKind`,
                label: `[${labelPrefix}typeKind]`,
                type: 'string',
                choices: [
                    'None',
                    'Primitive',
                    'Entity',
                    'Complex',
                    'Collection',
                    'EntityReference',
                    'Enum',
                    'TypeDefinition',
                    'Untyped',
                    'Path',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'typeKind': bundle.inputData?.[`${keyPrefix}typeKind`],
        }
    },
}
