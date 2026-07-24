const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}detail`,
                label: `[${labelPrefix}detail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instance`,
                label: `[${labelPrefix}instance]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}errors`,
                label: `[${labelPrefix}errors]`,
                type: 'object',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'detail': bundle.inputData?.[`${keyPrefix}detail`],
            'instance': bundle.inputData?.[`${keyPrefix}instance`],
            'errors': bundle.inputData?.[`${keyPrefix}errors`],
        }
    },
}
