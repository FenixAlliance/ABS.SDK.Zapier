const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pluralTitle`,
                label: `[${labelPrefix}pluralTitle]`,
                required: true,
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
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemCategoryID`,
                label: `[${labelPrefix}itemCategoryID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemGoogleCategoryID`,
                label: `[${labelPrefix}itemGoogleCategoryID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'pluralTitle': bundle.inputData?.[`${keyPrefix}pluralTitle`],
            'singularTitle': bundle.inputData?.[`${keyPrefix}singularTitle`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'imageURL': bundle.inputData?.[`${keyPrefix}imageURL`],
            'googleCategoryTaxonomy': bundle.inputData?.[`${keyPrefix}googleCategoryTaxonomy`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'itemCategoryID': bundle.inputData?.[`${keyPrefix}itemCategoryID`],
            'itemGoogleCategoryID': bundle.inputData?.[`${keyPrefix}itemGoogleCategoryID`],
        }
    },
}
