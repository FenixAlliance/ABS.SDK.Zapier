const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instructorProfileID`,
                label: `[${labelPrefix}instructorProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseTeamMembershipType`,
                label: `[${labelPrefix}courseTeamMembershipType]`,
                type: 'string',
                choices: [
                    'Admin',
                    'Staff',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'instructorProfileID': bundle.inputData?.[`${keyPrefix}instructorProfileID`],
            'courseTeamMembershipType': bundle.inputData?.[`${keyPrefix}courseTeamMembershipType`],
        }
    },
}
