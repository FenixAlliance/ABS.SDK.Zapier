const utils = require('../utils/utils');
const Error = require('../models/Error');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                type: 'boolean',
            },
            ...Error.fields(`${keyPrefix}error`, isInput),
            {
                key: `${keyPrefix}correlationID`,
                label: `[${labelPrefix}correlationID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}utcTimestamp`,
                label: `[${labelPrefix}utcTimestamp]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'success': bundle.inputData?.[`${keyPrefix}success`],
            'error': utils.removeIfEmpty(Error.mapping(bundle, `${keyPrefix}error`)),
            'correlationID': bundle.inputData?.[`${keyPrefix}correlationID`],
            'utcTimestamp': bundle.inputData?.[`${keyPrefix}utcTimestamp`],
        }
    },
}
