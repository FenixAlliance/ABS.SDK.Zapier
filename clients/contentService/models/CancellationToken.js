const utils = require('../utils/utils');
const WaitHandle = require('../models/WaitHandle');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isCancellationRequested`,
                label: `[${labelPrefix}isCancellationRequested]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}canBeCanceled`,
                label: `[${labelPrefix}canBeCanceled]`,
                type: 'boolean',
            },
            ...WaitHandle.fields(`${keyPrefix}waitHandle`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isCancellationRequested': bundle.inputData?.[`${keyPrefix}isCancellationRequested`],
            'canBeCanceled': bundle.inputData?.[`${keyPrefix}canBeCanceled`],
            'waitHandle': utils.removeIfEmpty(WaitHandle.mapping(bundle, `${keyPrefix}waitHandle`)),
        }
    },
}
