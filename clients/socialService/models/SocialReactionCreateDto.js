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
            {
                key: `${keyPrefix}reactionValue`,
                label: `[${labelPrefix}reactionValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'reaction': bundle.inputData?.[`${keyPrefix}reaction`],
            'reactionValue': bundle.inputData?.[`${keyPrefix}reactionValue`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
        }
    },
}
