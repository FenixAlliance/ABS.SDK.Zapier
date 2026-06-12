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
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}instructorProfileId`,
                label: `[${labelPrefix}instructorProfileId]`,
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
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'instructorProfileId': bundle.inputData?.[`${keyPrefix}instructorProfileId`],
            'courseTeamMembershipType': bundle.inputData?.[`${keyPrefix}courseTeamMembershipType`],
        }
    },
}
