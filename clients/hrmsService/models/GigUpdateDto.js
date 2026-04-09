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
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
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
                key: `${keyPrefix}category`,
                label: `[${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tags`,
                label: `[${labelPrefix}tags]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'tags': bundle.inputData?.[`${keyPrefix}tags`],
        }
    },
}
