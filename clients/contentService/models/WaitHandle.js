const utils = require('../utils/utils');
const SafeWaitHandle = require('../models/SafeWaitHandle');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}handle`,
                label: `[${labelPrefix}handle]`,
                dict: true,
            },
            ...SafeWaitHandle.fields(`${keyPrefix}safeWaitHandle`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'handle': bundle.inputData?.[`${keyPrefix}handle`],
            'safeWaitHandle': utils.removeIfEmpty(SafeWaitHandle.mapping(bundle, `${keyPrefix}safeWaitHandle`)),
        }
    },
}
