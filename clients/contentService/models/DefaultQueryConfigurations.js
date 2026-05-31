const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableExpand`,
                label: `[${labelPrefix}enableExpand]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableSelect`,
                label: `[${labelPrefix}enableSelect]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableCount`,
                label: `[${labelPrefix}enableCount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableOrderBy`,
                label: `[${labelPrefix}enableOrderBy]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableFilter`,
                label: `[${labelPrefix}enableFilter]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}maxTop`,
                label: `[${labelPrefix}maxTop]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableSkipToken`,
                label: `[${labelPrefix}enableSkipToken]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableExpand': bundle.inputData?.[`${keyPrefix}enableExpand`],
            'enableSelect': bundle.inputData?.[`${keyPrefix}enableSelect`],
            'enableCount': bundle.inputData?.[`${keyPrefix}enableCount`],
            'enableOrderBy': bundle.inputData?.[`${keyPrefix}enableOrderBy`],
            'enableFilter': bundle.inputData?.[`${keyPrefix}enableFilter`],
            'maxTop': bundle.inputData?.[`${keyPrefix}maxTop`],
            'enableSkipToken': bundle.inputData?.[`${keyPrefix}enableSkipToken`],
        }
    },
}
