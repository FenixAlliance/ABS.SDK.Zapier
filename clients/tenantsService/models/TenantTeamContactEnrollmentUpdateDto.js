const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
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
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'businessTeamID': bundle.inputData?.[`${keyPrefix}businessTeamID`],
            'contactID': bundle.inputData?.[`${keyPrefix}contactID`],
        }
    },
}
