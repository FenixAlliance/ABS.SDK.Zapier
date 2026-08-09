const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileName`,
                label: `[${labelPrefix}socialProfileName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileAvatarUrl`,
                label: `[${labelPrefix}socialProfileAvatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileType`,
                label: `[${labelPrefix}socialProfileType]`,
                type: 'string',
                choices: [
                    'User',
                    'Tenant',
                    'Contact',
                ],
            },
            {
                key: `${keyPrefix}reaction`,
                label: `[${labelPrefix}reaction]`,
                type: 'string',
                choices: [
                    'Like',
                    'Happy',
                    'HaHa',
                    'Love',
                    'Sad',
                    'Angry',
                    'Wow',
                    'Afraid',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'socialProfileName': bundle.inputData?.[`${keyPrefix}socialProfileName`],
            'socialProfileAvatarUrl': bundle.inputData?.[`${keyPrefix}socialProfileAvatarUrl`],
            'socialProfileType': bundle.inputData?.[`${keyPrefix}socialProfileType`],
            'reaction': bundle.inputData?.[`${keyPrefix}reaction`],
        }
    },
}
