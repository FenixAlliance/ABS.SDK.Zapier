const utils = require('../utils/utils');

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
                key: `${keyPrefix}organization`,
                label: `[${labelPrefix}organization]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterHandler`,
                label: `[${labelPrefix}twitterHandler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gitHubUsername`,
                label: `[${labelPrefix}gitHubUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facebookUsername`,
                label: `[${labelPrefix}facebookUsername]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'organization': bundle.inputData?.[`${keyPrefix}organization`],
            'twitterHandler': bundle.inputData?.[`${keyPrefix}twitterHandler`],
            'gitHubUsername': bundle.inputData?.[`${keyPrefix}gitHubUsername`],
            'facebookUsername': bundle.inputData?.[`${keyPrefix}facebookUsername`],
        }
    },
}
