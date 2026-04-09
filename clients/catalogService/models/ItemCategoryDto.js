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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
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
                key: `${keyPrefix}isFeatured`,
                label: `[${labelPrefix}isFeatured]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableForCourses`,
                label: `[${labelPrefix}enableForCourses]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableForProducts`,
                label: `[${labelPrefix}enableForProducts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableForLicenses`,
                label: `[${labelPrefix}enableForLicenses]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableForServices`,
                label: `[${labelPrefix}enableForServices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableForSubscriptions`,
                label: `[${labelPrefix}enableForSubscriptions]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentItemCategoryID`,
                label: `[${labelPrefix}parentItemCategoryID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'imageURL': bundle.inputData?.[`${keyPrefix}imageURL`],
            'isFeatured': bundle.inputData?.[`${keyPrefix}isFeatured`],
            'enableForCourses': bundle.inputData?.[`${keyPrefix}enableForCourses`],
            'enableForProducts': bundle.inputData?.[`${keyPrefix}enableForProducts`],
            'enableForLicenses': bundle.inputData?.[`${keyPrefix}enableForLicenses`],
            'enableForServices': bundle.inputData?.[`${keyPrefix}enableForServices`],
            'enableForSubscriptions': bundle.inputData?.[`${keyPrefix}enableForSubscriptions`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'parentItemCategoryID': bundle.inputData?.[`${keyPrefix}parentItemCategoryID`],
        }
    },
}
