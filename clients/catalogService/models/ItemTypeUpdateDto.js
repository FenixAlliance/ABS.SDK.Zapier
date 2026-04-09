const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}pluralTitle`,
                label: `[${labelPrefix}pluralTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}singularTitle`,
                label: `[${labelPrefix}singularTitle]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageURL`,
                label: `[${labelPrefix}imageURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}googleCategoryTaxonomy`,
                label: `[${labelPrefix}googleCategoryTaxonomy]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'pluralTitle': bundle.inputData?.[`${keyPrefix}pluralTitle`],
            'singularTitle': bundle.inputData?.[`${keyPrefix}singularTitle`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'imageURL': bundle.inputData?.[`${keyPrefix}imageURL`],
            'googleCategoryTaxonomy': bundle.inputData?.[`${keyPrefix}googleCategoryTaxonomy`],
        }
    },
}
