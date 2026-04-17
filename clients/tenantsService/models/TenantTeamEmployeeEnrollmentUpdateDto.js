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
                key: `${keyPrefix}employeeProfileID`,
                label: `[${labelPrefix}employeeProfileID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'businessTeamID': bundle.inputData?.[`${keyPrefix}businessTeamID`],
            'employeeProfileID': bundle.inputData?.[`${keyPrefix}employeeProfileID`],
        }
    },
}
