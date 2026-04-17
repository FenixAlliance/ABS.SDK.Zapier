const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}businessTeamID`,
                label: `[${labelPrefix}businessTeamID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactID`,
                label: `[${labelPrefix}contactID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'businessTeamID': bundle.inputData?.[`${keyPrefix}businessTeamID`],
            'contactID': bundle.inputData?.[`${keyPrefix}contactID`],
        }
    },
}
