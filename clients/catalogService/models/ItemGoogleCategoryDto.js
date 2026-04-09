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
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}featured`,
                label: `[${labelPrefix}featured]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}displayOnMenu`,
                label: `[${labelPrefix}displayOnMenu]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}hasChildren`,
                label: `[${labelPrefix}hasChildren]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}menuImage`,
                label: `[${labelPrefix}menuImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bannerCode`,
                label: `[${labelPrefix}bannerCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bannerImage`,
                label: `[${labelPrefix}bannerImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}primaryImage`,
                label: `[${labelPrefix}primaryImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCategoryId`,
                label: `[${labelPrefix}parentCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startingAtAmountInUsd`,
                label: `[${labelPrefix}startingAtAmountInUsd]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'featured': bundle.inputData?.[`${keyPrefix}featured`],
            'displayOnMenu': bundle.inputData?.[`${keyPrefix}displayOnMenu`],
            'hasChildren': bundle.inputData?.[`${keyPrefix}hasChildren`],
            'menuImage': bundle.inputData?.[`${keyPrefix}menuImage`],
            'bannerCode': bundle.inputData?.[`${keyPrefix}bannerCode`],
            'bannerImage': bundle.inputData?.[`${keyPrefix}bannerImage`],
            'primaryImage': bundle.inputData?.[`${keyPrefix}primaryImage`],
            'parentCategoryId': bundle.inputData?.[`${keyPrefix}parentCategoryId`],
            'startingAtAmountInUsd': bundle.inputData?.[`${keyPrefix}startingAtAmountInUsd`],
        }
    },
}
