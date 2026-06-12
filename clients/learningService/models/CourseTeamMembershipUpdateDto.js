const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instructorProfileId`,
                label: `[${labelPrefix}instructorProfileId]`,
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
            'instructorProfileId': bundle.inputData?.[`${keyPrefix}instructorProfileId`],
            'courseTeamMembershipType': bundle.inputData?.[`${keyPrefix}courseTeamMembershipType`],
        }
    },
}
