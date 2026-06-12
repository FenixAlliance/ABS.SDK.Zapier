const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}businessTeamId`,
                label: `[${labelPrefix}businessTeamId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeProfileId`,
                label: `[${labelPrefix}employeeProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'businessTeamId': bundle.inputData?.[`${keyPrefix}businessTeamId`],
            'employeeProfileId': bundle.inputData?.[`${keyPrefix}employeeProfileId`],
        }
    },
}
