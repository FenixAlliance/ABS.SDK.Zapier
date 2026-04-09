const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}postsPerPage`,
                label: `[${labelPrefix}postsPerPage]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableBlogPostComments`,
                label: `[${labelPrefix}enableBlogPostComments]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'postsPerPage': bundle.inputData?.[`${keyPrefix}postsPerPage`],
            'enableBlogPostComments': bundle.inputData?.[`${keyPrefix}enableBlogPostComments`],
        }
    },
}
