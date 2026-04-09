const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}projectStartDate`,
                label: `[${labelPrefix}projectStartDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectEndDate`,
                label: `[${labelPrefix}projectEndDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'projectStartDate': bundle.inputData?.[`${keyPrefix}projectStartDate`],
            'projectEndDate': bundle.inputData?.[`${keyPrefix}projectEndDate`],
        }
    },
}
