const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}instructorProfileID`,
                label: `[${labelPrefix}instructorProfileID]`,
                required: true,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'instructorProfileID': bundle.inputData?.[`${keyPrefix}instructorProfileID`],
            'courseTeamMembershipType': bundle.inputData?.[`${keyPrefix}courseTeamMembershipType`],
        }
    },
}
