const utils = require('../utils/utils');
const IEdmEntityContainer = require('../models/IEdmEntityContainer');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}containerElementKind`,
                label: `[${labelPrefix}containerElementKind]`,
                type: 'string',
                choices: [
                    'None',
                    'EntitySet',
                    'ActionImport',
                    'FunctionImport',
                    'Singleton',
                ],
            },
            ...IEdmEntityContainer.fields(`${keyPrefix}container`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'containerElementKind': bundle.inputData?.[`${keyPrefix}containerElementKind`],
            'container': utils.removeIfEmpty(IEdmEntityContainer.mapping(bundle, `${keyPrefix}container`)),
        }
    },
}
