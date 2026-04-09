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
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}budget`,
                label: `[${labelPrefix}budget]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}skillsRequired`,
                label: `[${labelPrefix}skillsRequired]`,
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
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'budget': bundle.inputData?.[`${keyPrefix}budget`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'skillsRequired': bundle.inputData?.[`${keyPrefix}skillsRequired`],
        }
    },
}
